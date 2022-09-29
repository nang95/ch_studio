import React from 'react';
import { StyleSheet } from 'react-native';

export const Colors = {
    primaryColor : '#0487F3',
    textColor1 : '#202020',
    textColor2 : '#e9ecef',
}

export const MainStyles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        paddingVertical: 10,
        width: 100,
    },
    container: {
        paddingHorizontal: 20,
    },
    textInput:{
        height: 40,
        borderBottomWidth: 1,
        padding: 10,
    },
    devider:{
        height: 20,
    }
});
