import React, { useRef, useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


export default function HomeScreen({navigation}){
    return (
        <View>
            <Button
                title="Move"
                onPress={() => navigation.navigate('Setting')}> 
                
            </Button> 
        </View>
    );
}
