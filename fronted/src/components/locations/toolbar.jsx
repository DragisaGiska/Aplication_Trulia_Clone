import Buttons from "../Buttons";
import Dropdown from "../dropdown";
import PriceItems from "../locations/priceItems";

const Toolbar = () => {
    const houseTypeItems = [
        { label: 'House', url: 'api/nesto' },
        { label: 'Condo', url: 'api/nesto' },
        { label: 'Townhome', url: 'api/nesto' },
        { label: 'Multy-Family', url: 'api/nesto' },
        { label: 'Land', url: 'api/nesto' },
        { label: 'Mobile/Manufactured', url: 'api/nesto' },
        { label: 'Other', url: 'api/nesto' }
    ]
    const houseBedsItems = [
        { label: 'Studio+', url: 'api/nesto' },
        { label: '1+', url: 'api/nesto' },
        { label: '2+', url: 'api/nesto' },
        { label: '3+', url: 'api/nesto' },
        { label: '4+', url: 'api/nesto' }

    ]
 


    return (
        
        
            <div className="z-500 bg-white intem-center pt-2.5 pb-4 pl-4 pr-4 w-full h-20 m-0 mr-20 ">
                
                    <ul className=" flex aling-center m-0 p-0">
                        <li className="inline-block mr-2 border-none">
                            <Buttons btnName={'Agent Listings (500+)'} btnUrl={''} type={'btnNavSingup'} />
                        </li>
                        <li className="inline-block mr-2">
                            <div className="relative bg-white">
                            <Buttons btnName={'Other'} btnUrl={''} type={'btnNavSingup'} />
                            </div>

                        </li>
                        <div className="relative group">
                            <li className="inline-block mr-2">
                                <Buttons btnName={'Any Price'} btnUrl={''} type={'btnNavSingup'} />

                                <div className="p-2  pt-3  m-0 rounded-l absolute z-10 hidden group-hover:block bg-white rounded shadow-2xl pt-1 pb-1 ">
                                    <PriceItems/>

                                </div>

                            </li>
                        </div>

                        <div className="relative group ">
                            <li className="inline-block mr-2">
                                <Buttons btnName={'All Beds'} btnUrl={''} type={'btnNavSingup'} />

                                <div className="p-2  pt-3  m-0 rounded-l absolute z-10 hidden group-hover:block bg-white rounded shadow-2xl pt-1 pb-1 ">
                                    <Dropdown dropDownLabel='' dropDownItems={houseBedsItems} type={'toolbarMenuBeds'} />

                                </div>

                            </li>
                        </div>
                        <div className="relative group ">
                            <li className="inline-block mr-2">
                                <Buttons btnName={'All Home Types'} btnUrl={''} type={'btnNavSingup'} />

                                <div className="absolute z-10 hidden group-hover:block bg-white rounded shadow-2xl pt-1 pb-1 ">
                                    <Dropdown dropDownLabel='' dropDownItems={houseTypeItems} type={'toolbarMenuTypeHouse'} />

                                </div>

                            </li>
                        </div>
                        <li className="inline-block mr-2">
                            <Buttons btnName={'More'} btnUrl={''} type={'btnNavSingup'} />
                        </li>
                        <li className="inline-block mr-2">
                            <Buttons btnName={'Save Search'} btnUrl={''} type={'btnNavSearch'} />

                        </li>
                    </ul>
                </div>
        
    )
}

export default Toolbar
