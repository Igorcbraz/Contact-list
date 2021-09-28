import React from 'react';
import { View, Text } from 'react-native';

import { Header } from './src/components/Header/Header';
import { PeoplesList } from './src/components/People/PeoplesList';

import { usePeoplesJson } from './src/Hooks/usePeoplesJson';


export default function App() {
  const peoples = usePeoplesJson();

  return (
      <View>
        <Header title="📞 Seus Contatos 📱" paragraph={`Total de contatos: ${peoples.length}`}/>
        <PeoplesList/>
    </View>
  );
}

