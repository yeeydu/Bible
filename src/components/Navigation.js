import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import BookScreen from './BookScreen';
import ChapterScreen from './ChapterScreen';
import VerseScreen from './VerseScreen';
import AboutScreen from './AboutScreen';
import theme from '../theme/theme';
import ThemeContext from '../theme/themeContext';

export default function Navigation() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Book" style={[styles.container, { color: theme.color }]}>
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
  )
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