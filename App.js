import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import kjv from './data/kjv.json';
import { SafeAreaView } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners'
import { useEffect, useState } from 'react';
import theme from './src/theme/theme';
import ThemeContext from './src/theme/themeContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './src/components/Navigation';
import TabNavigation from './src/components/TabNavigation';
//import 'expo-dev-client'
import mobileAds from 'react-native-google-mobile-ads';


export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('changeThemeEvent', (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeEventListener(listener);
    }
  }, [darkMode]);

  mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });

  // theme context must get values from theme.js
  return (
    <ThemeContext.Provider value={darkMode ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <StatusBar style="auto"  backgroundColor="white"  />
        {/* <Navigation /> */}
        <TabNavigation />   
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}


