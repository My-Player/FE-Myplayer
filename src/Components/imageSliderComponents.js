import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, Animated } from 'react-native';
// import {} from 'react-native-gesture-handler';


export const ImageSlider = ({ styles }) => {
    const imageSlider = [
        "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
        "https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
        "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ];
    const [count, setCount] = useState(0);

    const source = [
        require("../../assets/drawable-hdpi/ImageEvent.png"),
        require("../../assets/drawable-hdpi/ImageEventIndex2.png")
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            if (count === 3) {
                setCount(0);
            } else {
                setCount(prev => prev + 1);
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [count]);


    return (

        <View style={{ flex:1, flexDirection: "row" }}>
            {/* <ListView 
            dataSource={imageSlider}
            renderRow={
                (rowData) => {
                    let items = [];
                    for(let i;i<imageSlider.length;i++){
                        const key = 'image' + i;
                        const uri = rowData[key];
                        if(!uri) continue;
                        items.push(<Image)
                    }
                }
            }            
            /> */}
            <ScrollView style={{flex:1}} key={count} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={10} pagingEnabled>
                {source.map((image) => (
                    <Image source={image} resizeMode={"contain"} key={image} style={styles} />
                ))}
            </ScrollView>
        </View>
    );
}