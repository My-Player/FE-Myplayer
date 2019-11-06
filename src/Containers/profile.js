import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderComponents from '../Components/headerComponents';
export default function ProfilePage() {
    return(
        <View style={{flex:1}}>
            <HeaderComponents height={300} color={"#15AEE8"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {        

    },
})