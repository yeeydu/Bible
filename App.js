import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import kjv from './data/kjv.json';
import { SafeAreaView } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import BookScreen from './src/components/BookScreen';
import ChapterScreen from './src/components/ChapterScreen';
import VerseScreen from './src/components/VerseScreen';
import AboutScreen from './src/components/AboutScreen';
import { EventRegister } from 'react-native-event-listeners'
import { useEffect, useState } from 'react';
import theme from './src/theme/theme';
import ThemeContext from './src/theme/themeContext';

export default function App() {

  const Stack = createStackNavigator();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('changeThemeEvent', (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeEventListener(listener);
    }
  }, [darkMode]);

  // theme context must get values from theme.js
  return (
    <ThemeContext.Provider value={darkMode ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme: DefaultTheme}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Book" style={[styles.container, {color:theme.color}]}>
          <Stack.Screen
            name="King James Version Bible"
            component={HomeScreen} />
          <Stack.Screen
            name="About"
            component={AboutScreen} />
          <Stack.Screen
            name="Books"
            component={BookScreen}
          />
          <Stack.Screen
            name="Chapter"
            component={ChapterScreen}
            options={({ route }) => ({ title: `${route.params.book} ` })}
          />
          <Stack.Screen
            name="Verse"
            component={VerseScreen}
            options={({ route }) => ({ title: `${route.params.book} ${route.params.chapter}` })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    margingRight: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  }
});
