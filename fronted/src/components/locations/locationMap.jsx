import React, { useState, useEffect } from "react";
import LocationItem from "./locationItem";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";

function LocationMap({ locations }) {

    const [selectedPark, setSelectedPark] = useState(null);



    return (

        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.712776, lng: -74.005974 }}>
            {locations.map((location, index) =>
                <Marker
                
                    key={index}
                    position={{
                        lat: location.lat,
                        lng: location.log
                    }}
                    onClick={() => {
                        setSelectedPark(location);
                    }
                    }
                >
                </Marker>
            )}

            { selectedPark && (
                <InfoWindow position={{
                    lat: selectedPark.lat,
                    lng: selectedPark.log
                }}
                    onCloseClick={() => {
                        setSelectedPark(null);
                    }}
                >
                    <div>
                        Informacije o lokaciji
              </div>
                </InfoWindow>
            )}

        </GoogleMap>


    );

}

const MapWrapped = withScriptjs(withGoogleMap(LocationMap));

export default MapWrapped
