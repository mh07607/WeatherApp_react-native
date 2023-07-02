import React from "react";
import Home from "../screens/Home";
import Forecast from "../screens/Forecast";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator(); 

const Tabs = ({weather, LogIn}) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" options={{
                tabBarIcon: ({focused}) => 
                <Feather name="droplet" size={30} color={focused? 'tomato': 'black'}/>,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'whitesmoke'
                }
            }}>
                {() => <Home weatherData={weather.list[0]} LogIn={LogIn}/>}
            </Tab.Screen>
            
            <Tab.Screen name="Forecast"  options={{
                tabBarIcon: ({focused}) => 
                <Feather name="clock" size={30} color={focused? 'tomato': 'black'}/>,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'whitesmoke'
                }
                }}>
                {() => <Forecast weatherData={weather.list}/>}

            </Tab.Screen>
            <Tab.Screen name="City" options={{
                tabBarIcon: ({focused}) => 
                <Feather name="home" size={30} color={focused? 'tomato': 'black'}/>,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'whitesmoke'
                }
                }}>
                {() => <City cityData={weather.city}/>}
            </Tab.Screen>
        </Tab.Navigator>
      );
}

export default Tabs;