import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
// import { styles } from '../src/home';
import { Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from 'react-navigation-hooks';

export default function PlayersPage() {    
    return (
        <View style={{ flex: 1, backgroundColor: "white", alignContent: "center" }}>
            <ActivityIndicator style={{flex:2}} size="large" color="#15AEE8" />                 
        </View>
    );
}