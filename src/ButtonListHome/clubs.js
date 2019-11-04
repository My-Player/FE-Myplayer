import React from 'react';
import { View } from 'react-native';
// import { styles } from '../src/home';
import {Text} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function ClubsPage(){
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <Text>This is a list of clubs</Text>
        </View>
    );
}