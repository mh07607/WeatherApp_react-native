import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { weatherType } from '../utilities/weatherType';
import { TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 


const Home = ({weatherData, LogIn}) => {

  const {
    main: {temp, feels_like, temp_max, temp_min}, 
    weather
  } = weatherData;

  const weatherCondition = weather[0].main;

  const logOut = () => {
    LogIn(false)
  }

  return (
    <View style={[styles.wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={styles.container}>
        <View style={styles.logOutView}>
          <TouchableOpacity style={styles.logOutButton} onPressOut={logOut}>
            <SimpleLineIcons name="logout" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
          <Feather name={weatherType[weatherCondition].icon} size={50} color="black" />
          <Text style={styles.temperature}>{temp}°C</Text>
          <Text style={styles.feels}>Feels like {feels_like}°C</Text>
          <Text style={styles.range}>High: {temp_max}°C  |  Low: {temp_min}°C</Text>
        </View>
        <View style={{flex: 3, padding: 20}}>
          <Text style={styles.description}>{weather[0].description}</Text>
          <Text style={styles.message}>{weatherType[weatherCondition].message}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logOutButton: {
    padding: 10,
    paddingLeft: 5,
    backgroundColor: 'white',
    borderRadius: 50, 
    marginLeft: 10
  },
  logOutView: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  wrapper: {
    flex: 1,
  },
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,

  },
  temperature: {
    fontSize: 60,

  }, 
  description: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 30,
  },
  feels:{
    fontSize: 32,
  },
  range: {
    fontSize: 24,
  }


});

export default Home;