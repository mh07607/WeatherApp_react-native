import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';


//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export default function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const getWeatherDetails = async () => {
    try {
      let response = await fetch('http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}');
      let json = await response.json();
      setWeather(json);
    } catch (error) {
      setError("Couldn't get weather data");
    }
  }
  

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !=='granted'){
        setError('Permission to access location denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await getWeatherDetails();
    })()
  }, []);

  return (
    <View style={styles.container}>
      <Text>{error ? error: 'No error yet'}</Text>
      <Text>{location ? location['coords']['latitude']: 'Loading'}</Text>
      <Text>{location ? location['coords']['longitude']: 'Loading'}</Text>
      <Text>{weather? weather['cnt']: 'Loading'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
