import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
export default function InboxPage() {
    const [checked, setChecked] = useState("male");
    return (
        <View style={styles.container}>
            <Text>Hello this is Inbox page</Text>
            <RadioButton
                value="male"
                status={checked === "male" ? 'checked' : 'unchecked'}
                onPress={() => setChecked("male")}
                color={"#15AEE8"}
                uncheckedColor={"#707070"}
            />
            <Text style={{color:"white"}}>Male</Text>                            
            <RadioButton
                value="female"
                status={checked === "female" ? 'checked' : 'unchecked'}
                onPress={() => setChecked("female")}
                color={"#15AEE8"}
                uncheckedColor={"#707070"}
            />            
            <Text style={{color:"white"}}>Female</Text>       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: "row"
    },
})