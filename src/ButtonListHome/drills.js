import React from 'react';
import { View } from 'react-native';
// import { styles } from '../src/home';
import {Text, ActivityIndicator} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function DrillsPage(){
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <ActivityIndicator style={{flex:2}} size="large" color="#15AEE8" />
        </View>
    );
}