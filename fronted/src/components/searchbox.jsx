import React from 'react'
import { useState } from "react";


const Searchbox = () => {
    const [inputBox, setInputBox] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }
    function closeSearch(e) {
        setInputBox("");
    }

    return (
        <div className="w-full h-full p-0 m-0">
            <div className="text-white ">
                <div className="pt-0">
                    <div className="w-full">
                        <div className="flex-grow flex-shrink">
                            <div className="inline-block relative w-full transition">
                                <div>
                                    <input type="inputBox" value={inputBox} onChange={(e) => setInputBox(e.target.value)} className=" border-1  border-solid border-white bg-gray-200	 pt-1 pb-1 pl-2 text-gray-700 w-full h-10 inline-block text-l " type="text" placeholder="Search for City, Neighborhood, Zip, County, School" ></input>
                                </div>
                                
                                  {inputBox != '' &&
                                    (<div className=" cursor-pointer flex absolute  right-14 top-0 bottom-0  pt-2.5 pr-4 ">
                                    <div className="inline-block h-4 w-4 ">
                                        <svg type="submit" onClick={closeSearch}

                                            class="w-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z" fill="#869099"></path></svg>

                                    </div>

                                  </div>
                                    )
                                }
                                <div onClick={handleSubmit} className="absolute flex justify-center items-center	right-0 top-0  h-full bg-red-600 pl-4 pr-4 hover:bg-red-800 ">
                                    <div className="inline-block h-8 w-8 ">
                                        <svg className="w-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20.756 18.876l6.155 6.154-1.88 1.881-6.155-6.155A9.269 9.269 0 0 1 13.3 22.61a9.31 9.31 0 1 1 9.31-9.31c0 2.091-.69 4.021-1.854 5.576zM13.3 19.95a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3z" fill="#869099"></path></svg>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Searchbox
