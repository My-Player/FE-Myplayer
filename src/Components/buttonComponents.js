import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

const ButtonComponents = ({nameButton, source, navigateTo, height, width, top, left, resizeMode}) => {
    const { navigate } = useNavigation();
    const styles = StyleSheet.create({
        buttonClubs: {
            height: 50,
            width: 50,
            top: 20,
            left: 30,
            marginRight: 50,
            backgroundColor: "white",
            shadowRadius: 10,
            borderRadius: 10,
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: "#00000029",
            shadowOffset: { height: 5, width: 6 },
            elevation: 10,
        },
    })
    return (
        <View style={styles.buttonClubs} onTouchStart={() => navigate(navigateTo)}>
            <Image style={{ height: height, width: width, top: top, left: left }} resizeMode={resizeMode} source={source} />
            <Text style={{ top: 20, textAlign: "center" }}>{nameButton}</Text>
        </View>
    );
}

export default ButtonComponents;