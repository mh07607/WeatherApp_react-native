import React from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useGetWeather } from "./hooks/useGetWeather";
import Tabs from "./components/Tabs";
import ErrorItem from "./components/ErrorItem";

export default function App() {
  
  const [loading, error, weather] = useGetWeather();

  if(error)  {
    return (
      <ErrorItem error={error}/>
    );
  }

  if(weather && weather.list){
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
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