import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function Peoples(props){
    return (
        <View style={style.view}>
            <View style={style.container}>
                <Text style={style.title}>{props.name}</Text>
                <Text style={style.email}>{props.email}</Text>
                <Image style={style.logo} source={{uri: props.image}}/>
            </View>
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
        marginTop: 30,
        width: 300,

        borderWidth: 2,
        borderColor: "#745C97",
        borderRadius: 10,

        alignItems: 'center',

        shadowColor: "#745C97",
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
    email: {
        fontSize: 13,
        color: '#745C97',
        marginTop: 10,
        marginBottom: 10,
    },
    logo: {
        width: 66,
        height: 58,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#745C97',
    },
})