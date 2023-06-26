import React from "react";
import { View, StyleSheet, StatusBar, Text, ImageBackground } from "react-native";
import IconText from "../components/IconText";
import { Ionicons } from '@expo/vector-icons'; 



const City = () => {
    return (
        <>
        <ImageBackground 
            source = {require('../assets/karachi.jpg')}
            style = {styles.backgroundImage}
            />
            
        <View style={styles.top}>
            <View style={{marginBottom: 40, alignItems: 'center'}}>
                <Text style={{fontSize: 42}}>Karachi</Text>
                <Text style={{fontSize: 24}}> Pakistan</Text>
            </View>
            <IconText iconName='sunrise' text='6:00:00 am'/>
            <IconText iconName='sunset' text='7:31:00 pm'/>
            <View style={{alignItems: 'center'}}>
                <Ionicons name="people" size={60} color="black"/>
                <Text style={{fontSize: 42, fontWeight: 'bold'}}> 18000000</Text>
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