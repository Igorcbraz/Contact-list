import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Peoples } from '../People/Peoples';

export function RenderList(){
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function getInfo(){
        const {data} = await axios.get("https://randomuser.me/api/?results=10&nat=br");
        setPeople(data.results);
        }
        getInfo();
    }, [])

    const textElements = people.map(person => {
        return(
            <Peoples 
                    name={person.name.first}
                    email={person.email}
                    image={person.picture.thumbnail}
            />
        ); 
    });   

    return textElements;
}