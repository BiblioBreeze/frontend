import { load } from '@2gis/mapgl';
import { Map as TMap } from '@2gis/mapgl/types';
import React, { useEffect } from "react";

export const Map = () => {
    useEffect(() => {
        let map: TMap;

        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 10,
                key: import.meta.env.VITE_MAPS_API_KEY
            });
        });

        return () => map && map.destroy();
    }, []);

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