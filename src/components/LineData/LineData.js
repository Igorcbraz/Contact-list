import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function LineData({ title, data }) {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.data}>{data}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderBottomColor: '#E1E4EC',
    borderBottomWidth: 1,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

    width: '100%',
    padding: 15,
  },
  title: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#745C97',
  },
  data: {
    fontSize: '0.8rem',
    fontWeight: '400',
    color: '#9e86c2',
  },
});
