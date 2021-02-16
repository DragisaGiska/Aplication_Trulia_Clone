import '../index.css';
import Dropdown from "../components/dropdown";
import Buttons from "./Buttons";
import Searchbox from "./searchbox";

const navbar = ({ type , locations }) => {


  const buyItems = [
    { label:  '', url: 'api/nesto' },
    { label: 'Homes for Sale', url: 'locations?q=homes_for_sale' },
    { label: 'Open Houses', url: 'api/nesto' },
    { label: 'New Homes', url: 'api/nesto' },
    { label: 'Recently Sold', url: 'api/nesto' },
    { label: 'See Newest Listings', url: 'api/nesto' }
  ]
  const rentItems = [
    { label: '', url: 'api/nesto' },
    { label: 'All Rentals', url: 'api/nesto' },
    { label: 'Apartments for Rent', url: 'api/nesto' },
    { label: 'Houses for Rent', url: 'api/nesto' },
    { label: 'See Newest Listings', url: 'api/nesto' },
    { label: 'Post A Rental Listing', url: 'api/nesto' }
  ]
  const mortageItems = [
    { label: '', url: 'api/nesto' },
    { label: 'Mortgage Overview', url: 'api/nesto' },
    { label: 'Get Pre-Qualified', url: 'api/nesto' },
    { label: 'Mortgage Rates', url: 'api/nesto' },
    { label: 'Mortgage Calculator', url: 'api/nesto' },
    { label: 'Saved Homes', url: 'api/nesto' },
    { label: 'Affordability Calculator', url: 'api/nesto' },
    { label: 'Rent vs Buy Calculator', url: 'api/nesto' },
    { label: 'Refinance Calculator', url: 'api/nesto' }
  ]

  return (

    <div className=" w-full h-16 bg-white">
      <nav className="  z-1000 font-sans p-2 flex justify-start justify-between center w-full h-16 m-0 p-0 bg-white  text-sm border-b-1 border-solid border-gray-300 ">

       
          <a href="/" aria-label="Go to Trulia Home" className="flex pt-2 pb-2 pr-6">
            <div className="logoPhotos">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.96 50.44">
                <path d="M147.71 11a5.51 5.51 0 1 0-5.5-5.51 5.51 5.51 0 0 0 5.5 5.51zm4.99 29.56V14.64h-15.5v9.28h6.22v25.92h15.49v-9.28h-6.21zm-26.49 0V2.54h-15.49v9.28h6.21v28.74h-6.21v9.28h21.7v-9.28h-6.21zM60.25 14.52h-2.81a12.17 12.17 0 0 0-10.75 5.39l-1.89-5.27h-9.11v9.28H40v25.92h9.28V31.72a8.16 8.16 0 0 1 8.16-8.16h2.81zm42.98 18.35V14.64H94V33.2a8.29 8.29 0 0 1-16.58 0V14.64h-9.33v18.23a17.57 17.57 0 0 0 35.14 0zM27.6 23.92v-9.28H15.49V3.28H6.22v11.36H0v9.28h6.22v8.92a17.56 17.56 0 0 0 17.56 17.57A17.74 17.74 0 0 0 27.6 50v-9.17a9.28 9.28 0 0 1-3.18.56 8.78 8.78 0 0 1-8.93-8.61v-8.86zm162.09-9.28v3.5a13.08 13.08 0 0 0-9.14-4h-.72c-9.17 0-16.6 8.12-16.6 18.15s7.43 18.19 16.6 18.15h.72a13.08 13.08 0 0 0 9.14-4v3.5H199v-35.3zm-8.81 26.82a9.06 9.06 0 0 1-8.88-9.23 8.85 8.85 0 1 1 17.69 0 9 9 0 0 1-8.81 9.23z">
                </path>
              </svg>
            </div>
          </a>
      
         
            
        <div className="flex w-full">
            

          <div className="flex" >
          { type != 'firstPage' && 
          (<div className="h-10 w-96 border mr-4">
          <Searchbox/>
          </div>
          )
          }
           
            
         
          
            <div className="relative group ">
             

              <Buttons btnName={'Bay'} btnUrl={'locations?q=buy'} type={'btnNav'} />

              <div className="absolute z-10 hidden group-hover:block bg-white rounded shadow-2xl pt-1 pb-1 ">
                <Dropdown  dropDownLabel='Bay' dropDownItems={buyItems} type={'navMenu'}/>

              </div>
            </div>
            <div className="relative group">


              <Buttons btnName={'Rent'} btnUrl={''} type={'btnNav'} />


              <div className="absolute z-10 hidden group-hover:block  bg-white rounded shadow-2xl pt-1 pb-1 ">
                <Dropdown dropDownLabel='Rent' dropDownItems={rentItems} type={'navMenu'}/>

              </div>
            </div>
            <div className="relative group ">

              <Buttons btnName={'Mortage'} btnUrl={''} type={'btnNav'} />


              <div className="absolute z-10 hidden group-hover:block  bg-white rounded shadow-2xl pt-1 pb-1 ">
                <Dropdown dropDownLabel='Mortage' dropDownItems={mortageItems} type={'navMenu'}/>

              </div>

            </div>

          </div>
          <div className="flex justify-end	flex-auto fixed right-0">

            <div className="pr-3">


              <Buttons btnName={'Saved Homes'} btnUrl={''} type={'btnNav'} />

            </div>
            <div className="pr-3">

              <Buttons btnName={'Saved Searches'} btnUrl={''} type={'btnNav'} />

            </div>
            <div className="pr-3">

              <Buttons btnName={'Sign up or Log in'} btnUrl={''} type={'btnNavSingup'} />

            </div>
            <div className="flex ml-4 mr-5  pb-2 plr-2 bg-white cursor-pointer inline outline-none text-inherit pt-2" aria-haspopup="true" aria-expanded="false" >
          <div className="w-6 h-6 inline-block">
            <svg className="h-6 fill-current text-navibtn " viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.404 9.942v-2.66h21.142v2.66H5.404zm0 7.348v-2.66h21.142v2.66H5.404zm0 7.348v-2.66h21.142v2.66H5.404z" >
              </path>
            </svg>


          </div>


        </div>
          </div>
        </div>
        
      

      </nav>

    </div>

  )
}

export default navbar
