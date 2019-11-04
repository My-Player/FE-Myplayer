import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function InboxPage() {
    return(
        <View style={styles.container}>
            <Text>Hello this is Inbox page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: "#15AEE8",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1        
    },
})