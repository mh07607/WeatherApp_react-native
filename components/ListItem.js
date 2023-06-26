import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Feather } from '@expo/vector-icons'; 

const ListItem = ({dt_txt, min, max, condition }) => {
    return (
        <View style={styles.item}>
            <Feather name="sun" size={50} color="black" />
            <Text>{dt_txt}</Text>
            <Text style={{fontSize: 20}}>{min}</Text>
            <Text style = {{fontSize: 20}}>{max}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default ListItem;