import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from './screens/Main';
import Login from "./screens/Login";
//import Test from "./screens/Test";

import {auth} from './firebase';

// const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LogIn = (loggedin) => {
    if(!loggedin){
      auth
      .signOut()
    }
    setIsLoggedIn(loggedin);
  }

  if(isLoggedIn){
    return (
      <Main LogIn = {LogIn}/>
    );
  } else {
    return (
      <Login LogIn = {LogIn}/>
    );
  }

}

