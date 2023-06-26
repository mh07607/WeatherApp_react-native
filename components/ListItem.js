import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const ListItem = ({dt_txt, min, max, condition }) => {
    return (
        <View style={styles.item}>
            <Feather name={weatherType[condition].icon} size={50} color="black" />
            <View style={styles.date}>
                <Text style={{fontSize: 20}}>{moment(dt_txt).format('h:mm a')}</Text>
            </View>
            <Text style={{fontSize: 20}}>{Math.round(min*10)/10}° | {Math.round(max*10)/10}°</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
        elevation: 3,
        padding: 20,
    },
});

export default ListItem;