import Navbar from '../navbar';
import  Toolbar  from "../locations/toolbar";
import axios from 'axios'
import * as Constants from '../../constantc';
import React, { useState, useEffect } from 'react'
import LocationsMenu from './locationsMenu';

const Index = () => {
    const [locations, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const queryResult = await axios.post(
            Constants.GRAPHQL_API, {
    
            query: Constants.GET_LOCATIONS_QUERY
        });

        console.log()
        const result =queryResult.data.data.getLocation;
        setData(result)
    
        };
        fetchData();
    }, [])

    return (
        <div className=" pl-4 pr-4 relative z-100">
            <div className="fixed">
            <Navbar locations={locations}/>
          
            <Toolbar/>
            </div>
            

            <LocationsMenu locations={locations} />
            
        
          
            
            
        </div>
    )
}

export default Index
