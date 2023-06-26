import React  from "react"
import { Feather } from '@expo/vector-icons'; 
import { View, Text, StyleSheet } from "react-native";

const IconText = ({iconName, text}) => {
    return (
        <View style = {styles.top}>
            <Feather name={iconName} size={50} color="black" />
            <Text style={{fontSize: 24}}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },

});

export default IconText;