import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import Navigation from './navigation';
import AppLoading from 'expo-app-loading';
import {StyleSheet, Text, View} from 'react-native';

const fetchFonts = () => {
  return Font.loadAsync({
    'scotia-font': require('./assets/fonts/Frutiger.ttf'),
    'scotia-font-bold': require('./assets/fonts/Frutiger_bold.ttf'),
  });
};

function App() {
  // const [dataLoaded, setDataLoaded] = useState(false);
  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
