import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from './screens/Main';
import Login from "./screens/Login";
import Test from "./screens/Test";


const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LogIn = () => {
    setIsLoggedIn(true);
  }

  // if(isLoggedIn){
  //   return (
  //     <Main />
  //   );
  // } else {
  //   return (
  //     <Login LogIn = {LogIn}/>
  //   );
  // }

  return (
    <Test />
  );
}

