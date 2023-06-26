import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';
import { Feather } from '@expo/vector-icons'; 


//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const Home = () => {

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={50} color="black" />
        <Text>6</Text>
        <Text>Feels like 5</Text>
        <Text>High: 8 Low: 6</Text>
        <Text>Its sunny</Text>
        <Text>It's perfect t-shirt weather</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;