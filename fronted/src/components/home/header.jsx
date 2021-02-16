import Buttons from "../Buttons";
import Searchbox from "../searchbox";


const Header = () => {
    return (
        <div className=" pl-4 pr-4 w-full h-3/4">


            <div className="  pr-2 pl-2 pb-2 w-full h-3/4 ">
                 <div className=" bg-hero-pattern bg-no-repeat bg-cover h-screen rounded-2xl bg-center flex flex-col justify-center" >

                    <div className="flex flex-col justify-center ">
                        <div className="flex justify-center text-white  ">

                            <div className="font-bold text-5xl">
                                <div className=" flex shadow-lg">
                                    <h1 className="m-0  mb-12 text-5xl ">
                                        Discover a place <br /> you'll love to live

                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center text-2xl">
                            <div className=" bg-gray-700	bg-opacity-70  rounded-lg">
                             
                                <Buttons btnName={'Bay'} btnUrl={'locations?q=buy'} type={'btnMenu'} />
                             
                                <Buttons btnName={'Rent'} btnUrl={''} type={'btnMenu'} />
                             
                                <Buttons btnName={'Sold'} btnUrl={''} type={'btnMenu'} />
                              
                            </div>
                        </div>

                        <div className="mt-4 flex justify-center">
                            <div className="w-1/3">
                            <Searchbox />
                            </div>
                        </div>


                    </div>


                 </div>
              </div>
        </div>
    )
}

export default Header
