import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
// import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import ClubsPage from './ButtonListHome/clubs';
import { createAppContainer } from 'react-navigation';

export default function HomePage() {
    const { navigate } = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.header}>
                    {/* <Text style={styles.headerText}>My Player</Text> */}
                    <Image style={{
                        top: 20,
                        left: 111
                    }} source={require('../assets/HeaderText.png')} />
                </View>
                <View style={styles.card}>
                    <View style={styles.cardPhoto}>
                        <Image style={{ borderRadius: 50, flex: 1, width: undefined, height: undefined }} resizeMode='cover' source={require('../assets/LogoLakers.jpg')}></Image>
                    </View>
                    <View style={{ flexDirection:"column",marginLeft: 35 }}>
                        <Text style={{ fontSize: 22, fontWeight: "400" }}>Lakers</Text>
                        <Text style={{ fontSize: 16, fontWeight: "200", color: "#707070" }}>Banten</Text>                        
                            <View style={{ marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 1}}></View>                        
                    </View>                    
                </View>
                <View style={styles.buttonList}>
                    <View style={styles.buttonClubs} onTouchStart={() => navigate('Clubs')}>
                        <Image style={{ height: 40, width: 40, top: 5, left: 5 }} resizeMode="contain" source={require('../assets/drawable-xxhdpi/ButtonClubs.png')} />
                        <Text style={{ top: 20, textAlign: "center" }}>Clubs</Text>
                    </View>
                    <View style={styles.buttonClubs} onTouchStart={()=> navigate('Players')}>
                        <Image style={{ height: 35, width: 35, top: 7, left: 7 }} resizeMode="contain" source={require('../assets/drawable-xxhdpi/ButtonPlayers.png')} />
                        <Text style={{ top: 20, textAlign: "center" }}>Players</Text>
                    </View>
                    <View style={styles.buttonClubs}>
                        <Image style={{ height: 40, width: 40, top: 5, left: 5 }} resizeMode="contain" source={require('../assets/drawable-xxhdpi/ButtonEvents.png')} />
                        <Text style={{ top: 20, textAlign: "center" }}>Events</Text>
                    </View>
                    <View style={styles.buttonClubs}>
                        <Image style={{ height: 40, width: 40, top: 5, left: 5 }} resizeMode="contain" source={require('../assets/drawable-xxhdpi/ButtonDrills.png')} />
                        <Text style={{ top: 20, textAlign: "center" }}>Drills</Text>
                    </View>
                </View>
                <View style={styles.cardSchedule}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", top: 5 }}>Schedule</Text>
                </View>
                <View style={styles.cardEvent}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", top: 5 }}>Events</Text>
                    {/* <Image style={{height:385, width:135}} resizeMode="contain" source={require('../assets/drawable-xxhdpi/EventPicture.png')}></Image> */}
                </View>                
            </ScrollView>
        </View>
    );
}

export const styles = StyleSheet.create({
    header: {
        backgroundColor: "#15AEE8",
        paddingTop: 25,
        height: 200
    },
    card: {
        flex: 1,
        flexDirection: "row",
        marginTop: -100,
        marginLeft: 7,
        width: 400,
        height: 200,
        backgroundColor: '#FFFFFF',
        shadowRadius: 10,
        borderRadius: 15,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "#00000029",
        shadowOffset: { height: 5, width: 6 },

    },
    cardPhoto: {
        top: 20,
        left: 20,
        width: 80,
        height: 80,
        borderRadius: 50,
        borderStyle: "solid",
        borderColor: "#707070",
        borderWidth: 2
    },
    buttonList: {
        flexDirection: "row",
        height: 100
    },
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
    },
    cardSchedule: {
        marginTop: 15,
        marginLeft: 7,
        width: 400,
        height: 202,
        backgroundColor: '#FFFFFF',
        shadowRadius: 10,
        borderRadius: 15,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "#00000029",
        shadowOffset: { height: 5, width: 6 },
    },
    cardEvent: {
        marginTop: 15,
        marginLeft: 7,
        width: 400,
        height: 202,
        backgroundColor: '#FFFFFF',
        shadowRadius: 10,
        borderRadius: 15,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "#00000029",
        shadowOffset: { height: 5, width: 6 },
    },
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignContent: "center",
    }
})