import React from 'react';
import { View } from 'react-native';
// import { styles } from '../src/home';
import {Text} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function PlayersPage(){
    const navigation = useNavigation();
    return (
        <View style={{flex:1, backgroundColor:"white", alignContent:"center"}}>
            <Text>This is a list of Players</Text>
        </View>
    );
}