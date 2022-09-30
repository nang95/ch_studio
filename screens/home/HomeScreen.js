import React, { useRef, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MainStyles, screenDimesions } from '../../constant/styles';
import { homeStyles } from './components/styles';
import { Colors } from '../../constant/styles';
import DashedBorder from '../../constant/components';

export default function HomeScreen({navigation}){
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={MainStyles.container}>
                    <View style={MainStyles.deviderX2}></View>
                    <View style={MainStyles.deviderX2}></View>
                    <Text style={homeStyles.title}>CH Studio</Text>
                    <View style={MainStyles.deviderX2}></View>
                    <View style={MainStyles.card}>
                        <Text style={homeStyles.bannerTitle}>Total Pemasukkan</Text>
                        <View style={MainStyles.deviderX2}></View>
                        <View style={homeStyles.bannerContent}>
                            <Text style={homeStyles.bannerAmount}>15.000.000</Text>
                            <Ionicons name="bar-chart-outline" size={25} color={Colors.primaryColor} />
                        </View>
                    </View>
                    <View style={MainStyles.deviderX2}></View>
                </View>
                <View style={MainStyles.container}>
                    <Text style={homeStyles.titleTiles}>Last Order</Text>
                </View>
                <DashedBorder/>
                <View style={homeStyles.orderContent}>
                    <View style={MainStyles.container}>
                        <Text style={homeStyles.titleOrder}>Kreasi Boks Mandiri</Text>
                        <Text style={homeStyles.titleOrder}>Instagram Management</Text>
                        <Text style={homeStyles.titleOrder}>27-12-2022</Text>
                    </View>
                </View>
                <DashedBorder/>
                <View style={homeStyles.orderContent}>
                    <View style={MainStyles.container}>
                        <Text style={homeStyles.titleOrder}>Kreasi Boks Mandiri</Text>
                        <Text style={homeStyles.titleOrder}>Instagram Management</Text>
                        <Text style={homeStyles.titleOrder}>27-12-2022</Text>
                    </View>
                </View>
                <DashedBorder/>
                <View style={homeStyles.orderContent}>
                    <View style={MainStyles.container}>
                        <Text style={homeStyles.titleOrder}>Kreasi Boks Mandiri</Text>
                        <Text style={homeStyles.titleOrder}>Instagram Management</Text>
                        <Text style={homeStyles.titleOrder}>27-12-2022</Text>
                    </View>
                </View>
                <DashedBorder/>
                

            </SafeAreaView>
        </ScrollView>
    );
}
