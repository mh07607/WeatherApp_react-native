import React from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useGetWeather } from "./hooks/useGetWeather";
import Tabs from "./components/Tabs";
import ErrorItem from "./components/ErrorItem";
import Login from "./screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  
  // const [loading, error, weather] = useGetWeather();

  // if(error)  {
  //   return (
  //     <ErrorItem error={error}/>
  //   );
  // }

  // if(weather && weather.list){
  //   return (
  //     <NavigationContainer>
  //       <Tabs weather={weather}/>
  //     </NavigationContainer>
  //   );
  // }

  // return(
  //   <View style={styles.loading}>
  //     <Text>{loading}</Text>
  //     <ActivityIndicator size={50}/>
  //   </View>
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex:1,
    justifyContent: 'center',
  },
});