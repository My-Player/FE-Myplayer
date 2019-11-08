import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
// import { useNavigation } from 'react-navigation-hooks';
import HeaderComponents from '../Components/headerComponents';
import ButtonComponents from '../Components/buttonComponents';
import { ImageSlider } from '../Components/imageSliderComponents';

export default function HomePage() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <HeaderComponents height={200} color={"#15AEE8"} />
                <View style={styles.card}>
                    <View style={styles.cardPhoto}>
                        <Image style={{ borderRadius: 50, flex: 1, width: undefined, height: undefined }} resizeMode='cover' source={require('../../assets/LogoLakers.jpg')}></Image>
                    </View>
                    <View style={{ flex: 2, flexDirection: "column", marginLeft: 35 }}>
                        <Text style={{ fontSize: 22, fontWeight: "400" }}>Lakers Men</Text>
                        <Text style={{ fontSize: 16, fontWeight: "200", color: "#707070" }}>Banten</Text>                        
                            <View style={{ marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 1, marginRight:10}} />                        
                    </View>
                </View>
                <View style={styles.buttonList}>
                    <ButtonComponents
                        nameButton={"Clubs"}
                        source={require('../../assets/drawable-xxhdpi/ButtonClubs.png')}
                        height={40}
                        width={40}
                        top={5}
                        left={5}
                        navigateTo={'Clubs'}
                        resizeMode={"contain"}
                    />
                    <ButtonComponents
                        nameButton={"Players"}
                        source={require('../../assets/drawable-xxhdpi/ButtonPlayers.png')}
                        height={40}
                        width={40}
                        top={5}
                        left={5}
                        navigateTo={'Players'}
                        resizeMode={"contain"}
                    />
                    <ButtonComponents
                        nameButton={"Events"}
                        source={require('../../assets/drawable-xxhdpi/ButtonEvents.png')}
                        height={40}
                        width={40}
                        top={5}
                        left={5}
                        navigateTo={'Events'}
                        resizeMode={"contain"}
                    />
                    <ButtonComponents
                        nameButton={"Drills"}
                        source={require('../../assets/drawable-xxhdpi/ButtonDrills.png')}
                        height={40}
                        width={40}
                        top={5}
                        left={5}
                        navigateTo={'Drills'}
                        resizeMode={"contain"}
                    />
                </View>
                <View style={styles.cardSchedule}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", top: 5 }}>Schedule</Text>
                    <View style={{flex:2,justifyContent:"center",alignContent:"center"}}>
                        <Text style={{fontSize: 20, color:"#999999", fontWeight:"bold", alignSelf:"center"}}>No Schedule</Text>
                    </View>
                </View>
                <View style={styles.cardEvent}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", top: 5 }}>Events</Text>
                    <View style={{margin:10, flex:1}}>
                        <ImageSlider styles={styles.imageCardEvent}/>
                    </View>
                    {/* <Image style={{height:385, width:135}} resizeMode="contain" source={require('../assets/drawable-xxhdpi/EventPicture.png')}></Image> */}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({    
    card: {        
        flexDirection: "row",
        marginTop: -100,
        marginLeft: 7,
        marginRight: 7,        
        height: 200,
        backgroundColor: '#FFFFFF',
        shadowRadius: 10,
        borderRadius: 15,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "#00000029",
        shadowOffset: { height: 5, width: 6 },
        elevation: 10

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
        height: 100,
        justifyContent:"space-around",
        marginRight:7,
        marginLeft:7
    },
    cardSchedule: {
        flex:1,
        marginTop: 15,
        marginLeft: 7,   
        marginRight:7,     
        height: 202,
        backgroundColor: '#FFFFFF',
        shadowRadius: 10,
        borderRadius: 15,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "#00000029",
        shadowOffset: { height: 5, width: 6 },
        elevation: 10,
    },
    cardEvent: {        
        marginTop: 15,
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 15,
        height: 200,
        backgroundColor: '#FFFFFF',
        shadowRadius: 10,
        borderRadius: 15,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: "#00000029",
        shadowOffset: { height: 5, width: 6 },
        elevation: 10,
    },
    imageCardEvent: {             
        alignSelf:"center",                      
    }, 
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignContent: "center",
    }
})