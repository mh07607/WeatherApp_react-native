import { useState, useEffect } from "react";
// import { WEATHER_API_KEY } from '@env';
import * as Location from 'expo-location';

import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, 'api', 'W2m2Ms0Bfm2NY5v6B2gB');


export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);

  const fetchAPIKey = (async() => {
      const docSnap = await getDoc(docRef);
      return docSnap.data().WEATHER_API_KEY;
  });


  const fetchWeatherData = async() => {
    try{      
      const WEATHER_API_KEY = await fetchAPIKey();
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
      const data = await res.json();
      setWeather(data);
    } catch (e) {
      setError('Could not fetch Weather');
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});

      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
    
      await fetchWeatherData();
    }) ()
  }, [lat, lon]);



  return [loading, error, weather]
}   