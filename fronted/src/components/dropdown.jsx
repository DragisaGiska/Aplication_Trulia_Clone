import React from 'react'

export const Dropdown = ({dropDownLabel, dropDownItems, type}) => {
   if(type === 'navMenu')
   {
    return (
        <div>
            {/* <button>{dropDownLabel}</button> */}
            <ul>
                {dropDownItems.map(item => (
                     <div>
                    <li className="cursor-pointer flex text-singupbtn whitespace-nowrap	pt-2 pb-2 pl-4 pr-4 hover:bg-gray-200"><a href={item}>{item.label}</a></li>
                    </div>
                ))}
            </ul>
        </div>
    )  
   }
   else if(type === 'toolbarMenuTypeHouse')
   {
    return (
        <div>
            {/* <button>{dropDownLabel}</button> */}
            <ul>
                {dropDownItems.map(item => (
                     <div>
                      <li className="cursor-pointer flex text-singupbtn whitespace-nowrap pt-2 pb-2 pl-4 pr-4 hover:bg-gray-200">
                        <div className="pr-2">
                        <input className=" overflow-hidden top-0 left-0 w-5 h-5 m-0  z-1" type="checkbox" name={ item.label }/>
                        </div>
                        <div>
                            { item.label }
                        </div>
                         </li>
                    </div>
                ))}
            </ul>
        </div>
    ) 
   }
   else if(type === 'toolbarMenuBeds')
   {
    return (
        <div className="flex">
            {/* <button>{dropDownLabel}</button> */}
           
                {dropDownItems.map(item => (
                     <div >
                         <button className="text-singupbtn hover:border-transparent pt-2 pr-4 pb-2 pl-4 cursor-pointer border translation text-base hover:bg-gray-200	">
                         { item.label }
                         </button>
                    
                    </div>
                ))}
        
        </div>
    ) 
   }

}
export default Dropdown;

