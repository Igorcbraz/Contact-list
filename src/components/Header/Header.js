import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function Header(props) {
    return(
        <View style={style.container}>
            <Text style={style.title}>
                {props.title}
            </Text>
            <Text style={style.paragraph}>
                {props.paragraph}
                {props.image && (
                    <Image style={style.logo} source={{uri: props.image}}/>
                )}
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

        display: 'flex',
        alignItems: 'center',
        padding: 10,
        marginBottom: 15,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 5,
        borderWidth: 3,
        marginLeft: 10,
        borderColor: '#745C97',
    }
})