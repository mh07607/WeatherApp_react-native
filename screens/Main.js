import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useGetWeather } from "../hooks/useGetWeather";
import Tabs from "../components/Tabs";
import ErrorItem from "../components/ErrorItem";
import { NavigationContainer } from "@react-navigation/native";


const Main = ({LogIn}) =>{
  const [loading, error, weather] = useGetWeather();

  if(error)  {
    return (
      <ErrorItem error={error}/>
    );
  }

  if(weather && weather.list){
    return (
      <NavigationContainer independent={true}>
        <Tabs weather={weather} LogIn = {LogIn}/>
      </NavigationContainer>
    );
  }

  return(
    <View style={styles.loading}>
      <Text>{loading}</Text>
      <ActivityIndicator size={50}/>
    </View>
  );
}

const styles = StyleSheet.create({
    loading: {
      flex:1,
      justifyContent: 'center',
    },
  });

export default Main;