import React, { useRef, useState } from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignInStyles } from './components/styles';
import { MainStyles, Colors } from '../../constant/styles';

export default function SignInScreen({navigation}){
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{ ...MainStyles.container, marginTop: 200}}>
                        <View style={MainStyles.deviderX2}></View>
                        <Image source={require('../../assets/logo.png')} style={SignInStyles.logo}/>
                        <Text style={ SignInStyles.subtitle }>Silahkan masuk terlebih dahulu sebelum melanjutkan.</Text>
                        <View style={MainStyles.deviderX2}></View>
                        <View style={MainStyles.deviderX2}></View>
                        <TextInput style={MainStyles.textInput} placeholder="Email" selectionColor={Colors.primaryColor}/>
                        <View style={MainStyles.deviderX2}></View>
                        <TextInput style={MainStyles.textInput} secureTextEntry={true} selectionColor={Colors.primaryColor} placeholder="Password"/>
                        <View style={MainStyles.deviderX2}></View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Index')}
                            style={MainStyles.primaryButton}>
                            <Text style={MainStyles.buttonText}>Masuk</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}
