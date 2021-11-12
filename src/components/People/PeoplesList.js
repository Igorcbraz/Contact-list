import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { usePeoplesJson } from '../../Hooks/usePeoplesJson';

export function PeoplesList({ navigation }) {
  const peoples = usePeoplesJson();

  if(peoples.length <= 0){
    return (
      <View style={[style.containerLoading, style.horizontal]}>
        <ActivityIndicator size="large" color="#745C97" />
      </View>
    );
  }

  return (
    <View style={style.view}>
      <FlatList
        data={peoples}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={style.container}
            onPress={() => {
              navigation.navigate('Profile', item);
            }}>
            <Image
              style={style.logo}
              source={{ uri: item.picture.thumbnail }}
            />
            <Text style={style.title}>{item.name.first}</Text>
            <Text style={style.cell}>{item.cell}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 10,
    marginTop: 15,
    width: '90vw',
    maxWidth: 500,

    borderWidth: 2,
    borderColor: '#E1E4EC',
    borderRadius: 10,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

    shadowColor: '#745C97',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.29,
    shadowRadius: 18,

    elevation: 5,
  },
  title: {
    fontSize: 17,
    color: '#745C97',
    fontWeight: 'bold',
  },
  cell: {
    fontSize: 13,
    color: '#745C97',
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 9999,
    borderWidth: 2.5,
    borderColor: '#745C97',
  },

  containerLoading: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
