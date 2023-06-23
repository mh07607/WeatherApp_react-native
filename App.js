import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getWeatherDetails = async () => {
  let response = await fetch(
    //url
  );
  let json = await response.json();
  return json.something;

}

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
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
