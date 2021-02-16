
import LocationItem from "./locationItem";
import MapWrapped from "../locations/locationMap";

const LocationsMenu = ({ locations }) => {
  
    return (
        <div className=" flex flex-column">
            <div className="w-2/4  block">
                <div className="mt-40 flex-column p-4">
                    <div className="justify-between items-start pb-2 flex-column flex-1">
                        <h1 className="mb-1 text-2xl">
                            ime pretrage
                        </h1>
                        <div className="w-full flex justify-between	pb-1">
                            <div className="flex flex-wrap 	justify-between	aling-center w-full">
                                <h2 className="pr-2">
                                    broj kuca 
                                </h2>
                                <div className="inline-block">
                                    <div className="pt-2 pr-1">
                                        <div className="inline-block aling-center bold rounded-lg bg-white transition p-2">
                                            <div className="flex-row aling-center flex">

                                                <select aria-label="Sort Results" data-testid="sort-select" className=" w-full h-full cursor-pointer text-xl">
                                                    <option selected="" data-idx="0" value="Just For You">Sort: Just For You</option>
                                                    <option data-idx="1" value="New Listings">Sort: New Listings</option>
                                                    <option data-idx="2" value="Most Photos">Sort: Most Photos</option>
                                                    <option data-idx="3" value="Price (Lo-Hi)">Sort: Price (Lo-Hi)</option>
                                                    <option data-idx="4" value="Price (Hi-Lo)">Sort: Price (Hi-Lo)</option>
                                                    <option data-idx="5" value="Mortgage">Sort: Mortgage</option>
                                                    <option data-idx="6" value="Bedrooms">Sort: Bedrooms</option>
                                                    <option data-idx="7" value="Bathrooms">Sort: Bathrooms</option>
                                                    <option data-idx="8" value="Square Feet">Sort: Square Feet</option></select>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap 	justify-between	aling-center">


                    {locations.map((location, index) => <LocationItem key={index} item={location}></LocationItem>)}

                </div>

            </div>
            <div className="border fixed right-0 bottom-0 top-32 mt-0 ml-4 mr-3 mb-6 rounded-2xl">
                <div className="flex w-full h-full flex-1">
            
                <div style={{ width: "48vw", height: "88vh" }}>
                 <MapWrapped
                 locations={locations}
                 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${'AIzaSyAQmoCQlGhS5dr48KVCi6QXtCfy2tb0JU4'}`}
                 loadingElement={<div style={{ height: "100%" }} />} 
                 containerElement={<div style={{ height: "100%" }} />}
                  mapElement={<div style={{ height: "100%" }} />}/> 

                 </div>
                
                </div>
            </div>
        </div>
    )
}

export default LocationsMenu
