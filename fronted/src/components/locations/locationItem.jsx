import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

const LocationItem = ( props ) => {
    
    let array = props.item.address.split(",");
     
  
return (
    
    <div className="min-w-56 min-h-96 w-1/3 h-2/3 ">
    <a href="" className="inline-block m-2 mb-4 border-b-2  rounded-l">
        <div className="z-0 block">
            <div className="w-full h-40">
            <img data-testid="media-carousel-image-0" className="w-full h-full object-cover" src="https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/d78fec2c7478dfff6a084c95842801a5-full.jpg"/>
           </div>
            <div className="block">
                <div className="pt-2 pb-0 pl-0 pr-0">
                    <div className="flex-row aling-center flex">
                        <div className="mr-2 overflow-hidden">
                            <div className="font-bold text-lg overflow-hidden">

                         {props.item.properties.map(( propertie, index) => <p>{ propertie.price }$</p>)}
                       
                           </div>
                           
                        </div>
                        <div className="w-5 h-5 inline-block">
                                <svg data-testid="property-trend-down" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg>
                            </div>
                    </div>
                    <div className="flex flex-row ">
                        <div className="pr-1">
                            <div className="flex-row aling-center flex">
                                <div className="w-5 h-5 inline-block">
                                    <svg className="w-5 h-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
                                </div>
                                <div className="ml-1">
                                    <div className="text-lg">

                                    {props.item.properties.map(( propertie, index) => <p>{ propertie.number_of_bedrooms }bd</p>)}

                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="pr-1 ">
                        <div className="flex-row aling-center flex">
                            <div className="w-5 h-5 inline-block">
                                <svg className="w-5 h-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
                            </div>
                            <div className="text-lg">
                            {props.item.properties.map(( propertie, index) => <p>{ propertie.number_of_bathrooms }ba</p>)}

                         </div>
                        </div>
                    </div>
                    <div className="pr-1 ">
                        <div className="flex-row aling-center flex">
                            <div className="w-5 h-5 inline-block">
                                <svg className="w-5 h-5 " viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
                            </div>
                            <div className="text-lg">
                            {props.item.properties.map(( propertie, index) => <p>{ propertie.sqft } sqft</p>)}

                         </div>

                        </div>
                    </div>
                    </div>
                    
                    
                </div>
                <div className="flex-row aling-center flex">

                <p>{ array[3] }</p>
                
                
               </div>
                <div className="flex-row aling-center flex">
                    <p>{ array[0] },{ array[1] },{ array[2] }</p>
               </div>
            </div>
        </div>
    </a>
</div>
           
)
}

export default LocationItem
