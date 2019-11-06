import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';

const HeaderComponents = ({height, color}) => {
    const styles = StyleSheet.create({
        header: {
            backgroundColor: color,
            paddingTop: 25,
            height: height
        }
    })
    return (
        <View style={styles.header}>
            {/* <Text style={styles.headerText}>My Player</Text> */}
            <Image style={{
                top: 20,
                left: 111
            }} source={require('../../assets/HeaderText.png')} />
        </View>
    );
}

export default HeaderComponents;