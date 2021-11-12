import React from 'react';
import { ScrollView, View } from 'react-native';

import { Header } from '../components/Header/Header.js';
import { PeoplesList } from '../components/People/PeoplesList';

import { usePeoplesJson } from '../Hooks/usePeoplesJson';

export function Contacts({ navigation }) {
  const peoples = usePeoplesJson();

  return (
    <View>
      <Header
        title="📞 Seus Contatos 📱"
        paragraph={`Total de contatos: ${peoples.length}`}
      />
      <ScrollView>
        <PeoplesList navigation={navigation} />
      </ScrollView>
    </View>
  );
}
