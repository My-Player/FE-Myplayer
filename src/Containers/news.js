import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ImageSlider } from '../Components/imageSliderComponents';
export default function NewsPage() {
    return(
        <View style={styles.container}>
            <Text>Hello this is Profile page</Text>
            <ImageSlider style={{height: 100}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1        
    },
})