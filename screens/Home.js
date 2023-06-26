import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { weatherType } from '../utilities/weatherType';

const Home = ({weatherData}) => {

  const {
    main: {temp, feels_like, temp_max, temp_min}, 
    weather
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={50} color="black" />
        <Text>{temp}</Text>
        <Text>Feels like {feels_like}</Text>
        <Text>High: {temp_max} Low: {temp_min}</Text>
        <Text>Its sunny</Text>
        <Text>{weatherType.Thunderstorm.message}</Text>
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