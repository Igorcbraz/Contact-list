import { useEffect, useState } from 'react';
import axios from 'axios';

export function usePeoplesJson(){
    const [people, setPeople] = useState([]);

    //Get JSON from randomuser API
    useEffect(() => {
        async function getInfo(){
        const {data} = await axios.get("https://randomuser.me/api/?results=10&nat=br");
        setPeople(data.results);
        };
        getInfo();
        
    }, [])  
    
    return people;
}