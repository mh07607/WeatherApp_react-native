import React from "react";
import { View, StyleSheet, Text, StatusBar, FlatList, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55, 
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 8.55, 
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55, 
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    },
];

const Item = ({dt_txt, min, max, condition }) => {
    return (
        <View style={styles.item}>
            <Feather name="sun" size={50} color="black" />
            <Text>{dt_txt}</Text>
            {/* <Text>{condition}</Text> */}
            <Text style={{fontSize: 20}}>{min}</Text>
            <Text style = {{fontSize: 20}}>{max}</Text>
        </View>
        
    );
}

const Forecast = () => {
    return (
        <>
        <ImageBackground 
            source={require('../assets/tree.jpg')}
            style={{height: '100%', width: '100%', position: 'absolute'}}
            />
        <View style={styles.container}>
            <Text style={{fontSize: 32, marginBottom: 40, fontWeight: 'bold', color: 'pink'}}>Upcoming weather</Text>
            <FlatList 
            data={DATA}
            renderItem={({item}) => {
                return (
                    <Item dt_txt={item.dt_txt} 
                        min={item.main.temp_min} 
                        max={item.main.temp_max}
                    condition={item.weather[0].main}/>
                );
            }}   
            keyExtractor={(item) => item.dt_txt} 
            ItemSeparatorComponent={() => <View style={{height: 10}}/>}
            /> 
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        alignItems: 'center',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 10,
        backgroundColor: 'pink',
        borderRadius: 10,
        elevation: 3,
        padding: 20,
    },

});

export default Forecast;