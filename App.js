import React from 'react';

import { Contacts } from './src/Pages/Contacts'
import { Home } from './src/Pages/Home'
import { Profile } from './src/Pages/Profile'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="Home">
        <Stack.Screen name="Contacts" component={Contacts}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
