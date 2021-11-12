import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ActivityIndicator
} from 'react-native';

import { Header } from '../components/Header/Header.js';
import { LineData } from '../components/LineData/LineData.js';

export function Profile({ route }) {
  const user = route.params;

  if(user.length <= 0){
    return (
      <View style={[style.containerLoading, style.horizontal]}>
        <ActivityIndicator size="large" color="#745C97" />
      </View>
    );
  }

  return (
    <View>
      <Header
        title="Profile"
        paragraph={`${user.name.first} ${user.name.last}`}
      />

      <View style={style.firstInfos}>
        <Image style={style.photo} source={{ uri: user.picture.large }} />

        <View style={style.infosContainer}>
          <Text style={style.title}>
            {user.name.title} {user.name.first} {user.name.last}
          </Text>
          <Text style={style.location}>
            {user.location.country}, {user.location.state}
          </Text>

          <TouchableOpacity
            style={style.ligarBtn}
            onPress={() => {
              Linking.openURL(`tel:${user.cell}`);
            }}>
            <Text style={style.ligarBtnText}>Ligar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.ligarBtn, style.whatsapp]}
            onPress={() => {
              Linking.openURL(`whatsapp://send?text=hello&phone=${user.cell}`)
            }}>
            <Text style={style.ligarBtnText}>Whatsapp</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.dataContainer}>
        <LineData title="Email: " data={user.email} />
        <LineData title="Telefone: " data={user.phone} />
        <LineData title="Celular: " data={user.cell} />
        <LineData title="Idade: " data={user.dob.age} />
        <LineData title="Gênero: " data={user.gender} />
        <LineData title="Cidade: " data={user.location.city} />
        <LineData title="Nacionalidade: " data={user.nat} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  firstInfos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',

    marginTop: 30,
    marginHorizontal: 5,
  },
  infosContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  photo: {
    width: 150,
    height: 150,

    borderRadius: 9999,
    borderWidth: 2.5,
    borderColor: '#745C97',
  },
  title: {
    fontWeight: '500',
    fontSize: '1.2rem',
  },
  location: {
    fontWeight: '400',
    fontSize: '0.9rem',
  },
  ligarBtn: {
    padding: 10,
    marginTop: 10,
    textAlign: 'center',

    backgroundColor: '#745C97',
    shadowColor: '#745C97',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.29,
    shadowRadius: 18,
    borderRadius: 5,

    elevation: 5,
    width: '100%',
  },
  whatsapp: {
    backgroundColor: '#25D366',
    shadowColor: '#25D366',
  },
  ligarBtnText: {
    color: '#fff',
  },
  dataContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    marginTop: 30,
  },
});
