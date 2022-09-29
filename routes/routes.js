import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import SettingScreen from '../screens/settings/SettingScreen';
import SignInScreen from '../screens/auth/SignInScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {
    SignIn:{
        options: { title: '' },
        headerShown: false
    }
}

export default function Routes(){
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" 
                          component={SignInScreen} 
                          options={screenOptions.SignIn}></Stack.Screen>
            <Stack.Screen name="Home" 
                          component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Setting" 
                          component={SettingScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}
