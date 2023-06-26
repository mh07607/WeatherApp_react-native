import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import Home from "./screens/Home";
import Forecast from "./screens/Forecast";
import City from "./screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'; 
import { useState } from "react";


const Tab = createBottomTabNavigator(); 

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


export default function App() {
  const [loading, setLoading] = useState(false);

  if(loading){
    return(
      <View style={styles.loading}>
        <ActivityIndicator size={50}/>
      </View>
    );

  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({focused}) => 
              <Feather name="droplet" size={30} color={focused? 'tomato': 'black'}/>,
              headerShown: false,
              tabBarStyle: {
                backgroundColor: 'whitesmoke'
              }
          }}/>
          <Tab.Screen name="Forecast" component={Forecast} options={{
            tabBarIcon: ({focused}) => 
              <Feather name="clock" size={30} color={focused? 'tomato': 'black'}/>,
              headerShown: false,
              tabBarStyle: {
                backgroundColor: 'whitesmoke'
              }
            }}/>
          <Tab.Screen name="City" component={City} options={{
            tabBarIcon: ({focused}) => 
              <Feather name="home" size={30} color={focused? 'tomato': 'black'}/>,
              headerShown: false,
              tabBarStyle: {
                backgroundColor: 'whitesmoke'
              }
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );}

const styles = StyleSheet.create({
  loading: {
    flex:1,
    justifyContent: 'center',
  },
});