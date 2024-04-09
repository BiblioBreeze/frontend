import { load as loadMapGL } from '@2gis/mapgl';
import { Map as TMap, Marker as TMarker } from '@2gis/mapgl/types';
import React, { useEffect } from "react";

export interface Point {
    longitude: number
    latitude: number
}

interface MapProps {
    onMarkerPut?: (point: Point) => void
}

export const Map = (props: MapProps) => {
    useEffect(() => {
        let map: TMap;

        loadMapGL().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 10,
                key: import.meta.env.VITE_MAPS_API_KEY
            });

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
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
    },
    () => true,
);