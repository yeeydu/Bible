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
import ResultSearchScreen from './ResultSearchScreen';
import SearchScreen from './SearchScreen';

export default function Navigation() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home"
      style={[styles.container, { color: theme.color }]}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e8e77a",
        },
        headerTintColor: "#000",
        headerBackTitle: "Back",
        headerTitleAlign: "center",
      }} >
      <Stack.Screen
        name="King James Bible"
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
      <Stack.Screen
        name="Search"
        component={ResultSearchScreen}  options={{
          tabBarButton: (props) => (
            <CustomSearchBar {...props} onSubmit={(query) => props.navigation.navigate('Search', { query })} />
          ),
        }} />
    </Stack.Navigator>
  )
}

export const SearchingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ResultSearch" component={ResultSearchScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    margingRight: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  }
});