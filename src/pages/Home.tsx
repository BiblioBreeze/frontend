import {Map, Point} from "../components/Map/Map.tsx";
import userIcon from "../assets/icons/user_at_map.svg"

export const Home = () => {
    function onMarkerPut(ev: Point) {
        console.log(ev)
    }

    return (
        <div style={{width: '100%', height: 400}}>
            <Map
                defaultPosition={
                    {
                        longitude: 55.31878,
                        latitude: 25.23584
                    }
                }
                defaultZoom={15}
                userIcon={userIcon}
                onMarkerPut={onMarkerPut}
                markers={
                    [
                        {
                            point: {
                                longitude: 55.31878,
                                latitude: 25.23584
                            },
                            icon: userIcon,
                            data: 1,
                            onClick: (data) => {
                                console.log(data)
                            }
                        }
                    ]
                }
            />
        </div>
    )
}