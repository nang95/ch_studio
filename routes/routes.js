import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import SettingScreen from '../screens/settings/SettingScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppsStack = createNativeStackNavigator();
const appScreenOptions = {
    SignIn:{
        options: { title: '' },
        headerShown: false
    },
    Index:{
        options: { title: '' },
        headerShown: false
    }
}

const TabStack = createBottomTabNavigator();
const tabScreenOptions = {
    Home:{
        options: { title: '' },
        headerShown: false
    }
}

function TabStackScreen(){
    return(
        <TabStack.Navigator>
            <TabStack.Screen name="Home" 
                             component={HomeScreen} 
                             options={tabScreenOptions.Home}/>
            <TabStack.Screen name="Grafik" 
                             component={SettingScreen} />
            <TabStack.Screen name="Setting" 
                             component={SettingScreen} />
        </TabStack.Navigator>
    )
}

export default function Routes(){
    return (
        <AppsStack.Navigator initialRouteName="SignIn">
            <AppsStack.Screen name="SignIn" 
                          component={SignInScreen} 
                          options={appScreenOptions.SignIn}></AppsStack.Screen>
            <AppsStack.Screen name="Index" 
                          component={TabStackScreen}
                          options={appScreenOptions.Index}></AppsStack.Screen>
        </AppsStack.Navigator>
    )
}
