import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, 'api', 'W2m2Ms0Bfm2NY5v6B2gB');

const Test = () => {

    useEffect(()=>{(async() => {
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data().WEATHER_API_KEY);
    })()}, []);

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Yeet</Text>
        </View>
    );
}

export default Test;