import React from "react";
import { Feather } from '@expo/vector-icons'; 
import { View, Text } from "react-native";


const ErrorItem = ({error}) => {
    return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', gap: 5}}>
        <Feather name='frown' size={50} color="white" />
        <Text style={{fontSize: 20, textAlign:'center', color: 'white', width:'75%'}}>
            Sorry something went wrong. {error}
        </Text>
    </View>)
    ;
}

export default ErrorItem;