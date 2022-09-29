import React, { useRef, useState } from 'react';
import {View, Text, useWindowDimensions, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignInStyles } from './components/styles';
import { MainStyles, Colors } from '../../constant/styles';

export default function SignInScreen({navigation}){
    const window = useWindowDimensions();

    return (
        <View>
            <SafeAreaView>
                <View style={{ ...MainStyles.container, marginTop: (window.height / 2) - 100}}>
                    <Text style={ SignInStyles.title }>Login</Text>
                    <View style={MainStyles.devider}></View>
                    <TextInput style={MainStyles.textInput} placeholder="Email"/>
                    <View style={MainStyles.devider}></View>
                    <TextInput style={MainStyles.textInput} secureTextEntry={true} placeholder="Password"/>
                </View>
            </SafeAreaView>
        </View>
    )
}
