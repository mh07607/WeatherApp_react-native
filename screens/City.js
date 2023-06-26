import React from "react";
import { View, StyleSheet, StatusBar, Text, ImageBackground } from "react-native";
import IconText from "../components/IconText";
import { Ionicons } from '@expo/vector-icons'; 
import moment from "moment";



const City = ({cityData}) => {
    const { name, country, population, sunrise, sunset} = cityData;

    return (
        <>
        <ImageBackground 
            source = {require('../assets/karachi.jpg')}
            style = {styles.backgroundImage}
            />
            
        <View style={styles.top}>
            <View style={{marginBottom: 40, alignItems: 'center'}}>
                <Text style={{fontSize: 42}}>{name}</Text>
                <Text style={{fontSize: 24}}> {country} </Text>
            </View>
            <View style={{gap: 20}}>
                <IconText iconName='sunrise' text={moment(sunrise).format('h:mm:ss a')}/>
                <IconText iconName='sunset' text={moment(sunset).format('h:mm:ss a')}/>
            </View>
            <View style={{alignItems: 'center'}}>
                <Ionicons name="people" size={60} color="black"/>
                <Text style={{fontSize: 42, fontWeight: 'bold', backgroundColor: 'gray'}}> {population} </Text>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    top: {
        flex: 1,
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,

    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
});

export default City;