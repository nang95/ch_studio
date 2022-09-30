import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/routes';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = async () => await Font.loadAsync({
  'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if(!fontsLoaded){
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    ); 
  }

  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );
}
