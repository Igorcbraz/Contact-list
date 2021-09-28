import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Header(props) {
    return(
        <View style={style.container}>
            <Text style={style.title}>
                {props.title}
            </Text>
            <Text style={style.paragraph}>
                {props.paragraph}
            </Text>       
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#39375B',
        shadowColor: "black",

        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 35,
        color: '#FFF',
        fontWeight: 'bold',

        paddingTop: 40,
        paddingBottom: 20,
    },

    paragraph: {
        fontSize: 18,
        fontWeight: '400',

        backgroundColor: '#fff',
        borderRadius: 10,
        color: '#39375B',

        padding: 10,
        marginBottom: 15,
    }
})