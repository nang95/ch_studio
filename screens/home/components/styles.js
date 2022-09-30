import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, screenDimesions } from '../../../constant/styles';

export const homeStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        color:  Colors.primaryColor,
        fontFamily: 'poppins-bold'
    },
    bannerTitle:{
        fontFamily: 'poppins-medium',
        fontSize: 15,
        alignSelf: 'flex-start',
        color: Colors.textColor1,
    },
    bannerContent:{
        flex: 1,
        width: screenDimesions.width - 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bannerAmount:{
        fontFamily: 'poppins-bold',
        fontSize: 20,
        color: Colors.textColor1,
    },
    titleTiles:{
        fontFamily: 'poppins-medium',
        fontSize: 15,
        alignSelf: 'flex-start',
        color: Colors.textColor1,
    },
    orderContent:{
        height: 100,
        paddingVertical: 20,
    }
});