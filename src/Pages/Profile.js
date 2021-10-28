import React from 'react';
import { Header } from '../components/Header/Header.js';

export function Profile({route}){
    const user = route.params;

    console.log(user)

    return(
        <Header title="Profile" paragraph={`${user.name.first} ${user.name.last}`} image={user.picture.thumbnail}/>
    );
}