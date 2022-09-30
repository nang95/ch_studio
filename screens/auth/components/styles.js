import React from 'react';
import { StyleSheet } from 'react-native';
import { MainStyles, screenDimesions, Colors } from '../../../constant/styles';

export const SignInStyles = StyleSheet.create({
    subtitle: {
        fontSize: 15,
        color: Colors.textColor2,
        marginTop: 10,
        fontFamily: 'poppins-medium',
        textAlign: 'center'
    },
    logo: {
        alignSelf   : 'center',
        width: 60,
        height: 60,
        resizeMode: 'contain'
    }
});