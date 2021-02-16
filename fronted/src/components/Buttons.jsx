import React from 'react'
import cx from 'classnames'

const Buttons = ( { btnName, btnUrl, type }) => {
        const defaultClassNames = 'relative text-black-500 no-underline	transition-shadow outline-none rounded-lg	cursor-pointer inline-block text-center whitespace-nowrap text-base p-2 '


        const classNames = cx(defaultClassNames, {
            'border-transparent	 border-1 border-solid  hover:bg-navibtn hover:text-white pl-4 pr-4': type === 'btnNav',
            'border border-singupbtnhovercolor m-0 pb-2 pl-4 pr-4 outline-none bg-white text-singupbtn  hover:bg-gray-300 hover:border-transparent hover:text-singupbtnhovercolor': type === 'btnNavSingup',
            'border-transparent	 border-1 border-solid  bg-transparent text-navibtn	p-0 hover:border-transparent hover:bg-white hover:text-navibtn  pl-8 pr-8 pt-2 pb-2': type === 'btnMenu',
            'border-navibtn	 border border-solid  bg-white text-navibtn	p-0  hover:bg-search hover:text-navibtn  pl-8 pr-8 pt-2 pb-2': type === 'btnNavSearch',
        })
        
        return (
            <div className={classNames}>  
                 <a href= {btnUrl} >{btnName}</a>
            </div>
        )   
    }
 


export default Buttons


// debauns
