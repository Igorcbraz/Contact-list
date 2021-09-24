import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Header(props) {
    return(
        <View style={style.container}>
            <Text style={style.title}>{props.title}</Text>     
            <Text>{props.paragraph}</Text>       
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#39375B',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "black",
    },

    title: {
        fontSize: 30,
        paddingTop: 40,
        paddingBottom: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
})