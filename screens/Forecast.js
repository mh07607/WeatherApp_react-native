// import React from "react";
// import { View, StyleSheet, Text, StatusBar, FlatList, ImageBackground } from "react-native";
// import ListItem from "../components/ListItem";




// const Forecast = ({weatherData}) => {
    


//     return (
//         <>
//         <ImageBackground 
//             source={require('../assets/tree.jpg')}
//             style={{height: '100%', width: '100%', position: 'absolute'}}
//             />
//         <View style={styles.container}>
//             <Text style={{fontSize: 32, marginBottom: 30, fontWeight: 'bold', color: 'pink'}}>Upcoming weather</Text>
//             <FlatList 
//             data={weatherData}
//             renderItem={({item}) => {
//                 return (
//                     <ListItem dt_txt={item.dt_txt} 
//                         min={item.main.temp_min} 
//                         max={item.main.temp_max}
//                     condition={item.weather[0].main}/>
//                 );
//             }}   
//             keyExtractor={(item) => item.dt_txt} 
//             ItemSeparatorComponent={() => <View style={{height: 10}}/>}
//             /> 
//         </View>
//         </>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight,
//         alignItems: 'center',
//     },
// });

// export default Forecast;


import React from "react";
import { View, StyleSheet, Text, StatusBar, SectionList, ImageBackground } from "react-native";
import ListItem from "../components/ListItem";
import moment from "moment";

const Forecast = ({ weatherData }) => {

  // Group the weatherData by day
  function groupWeatherData(weatherData){
    const sections = [];

    weatherData.forEach((item) => {
        const date = moment(item.dt_txt).format('dddd');
        const sectionIndex = sections.findIndex((section) => section.title === date);
    
        if (sectionIndex !== -1) {
          // Add forecast to existing section
          sections[sectionIndex].data.push(item);
        } else {
          // Create new section for the date
          sections.push({
            title: date,
            data: [item],
          });
        }
      });

    return sections;
  }
  
  const sections = groupWeatherData(weatherData);

  return (
    <>
      <ImageBackground source={require('../assets/tree.jpg')} style={{ height: '100%', width: '100%', position: 'absolute' }} />
      <View style={styles.container}>
        <Text style={{ fontSize: 32, marginBottom: 30, fontWeight: 'bold', color: 'pink' }}>Upcoming weather</Text>
        <SectionList
          sections={sections}
          renderItem={({ item }) => (
            <ListItem dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} condition={item.weather[0].main} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontSize: 24, fontWeight: 'bold', color:'pink', padding: 10 }}>{title}</Text>
          )}
          keyExtractor={(item) => item.dt_txt}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
});

export default Forecast;