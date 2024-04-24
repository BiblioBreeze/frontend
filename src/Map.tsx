import {load as loadMapGL} from '@2gis/mapgl';
import {Map as TMap, Marker as TMarker} from '@2gis/mapgl/types';
import React, {useEffect} from "react";

export interface Point {
    longitude: number
    latitude: number
}

interface MarkerProps<DataT> {
    point: Point
    icon?: string,
    data?: DataT,
    onClick?: (data: DataT) => void
}

interface MapProps<MarkerPropsDataT> {
    userIcon: string
    onMarkerPut?: (point: Point) => void
    markers?: [MarkerProps<MarkerPropsDataT>]
}

export const Map = <MarkerPropsDataT = string, >(props: MapProps<MarkerPropsDataT>) => {
    useEffect(() => {
        let map: TMap;

        loadMapGL().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 15,
                key: import.meta.env.VITE_MAPS_API_KEY
            });

            props.markers?.forEach((markerProps) => {
                const marker = new mapglAPI.Marker(map, {
                    coordinates: [markerProps.point.longitude, markerProps.point.latitude],
                    icon: markerProps.icon,
                    userData: markerProps.data,
                })

                marker.on('click', (e) => {
                    markerProps.onClick?.(e.targetData.userData)
                })
            })

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (success) => {
                        const coords = [success.coords.longitude, success.coords.latitude]

                        map.setCenter(coords)
                        new mapglAPI.Marker(map, {
                            coordinates: coords,
                            icon: props.userIcon,
                        })
                    },
                )
            }

            if (props.onMarkerPut) {
                let marker: TMarker;

                map.on('click', (event) => {
                    if (marker) {
                        marker.destroy()
                    }

                    marker = new mapglAPI.Marker(map, {
                        coordinates: event.lngLat,
                    });

                    props.onMarkerPut?.({
                        longitude: event.lngLat[0],
                        latitude: event.lngLat[1]
                    })
                })
            }
        });

        return () => map && map.destroy();
    }, [props]);

    return (
        <div style={{width: '100%', height: '100%'}}>
            <MapWrapper/>
        </div>
    );
};

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{width: '100%', height: '100%'}}></div>;
    },
    () => true,
);