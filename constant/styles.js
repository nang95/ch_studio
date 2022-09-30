import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export const screenDimesions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export const Colors = {
    primaryColor : '#0b75a7',
    textColor1 : '#202020',
    textColor2 : '#818181',
}

export const MainStyles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    container: {
        paddingHorizontal: 20,
    },
    textInput:{
        height: 40,
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
        padding: 0,
        fontFamily: 'poppins-medium'
    },
    primaryButton: {
        alignItems: "center",
        backgroundColor: Colors.primaryColor,
        padding: 15,
        borderRadius: 5,
        color: 'white',
    },
    buttonText: {
        color: 'white',
    },
    deviderX1:{
        height: 10,
    },
    deviderX2:{
        height: 20,
    },
    strips:{
        borderTopColor: '#ebebeb',
        borderStyle: 'dotted',
        alignItems : 'center',
        borderBottomWidth: 1,
        height: 20,
    }
});
