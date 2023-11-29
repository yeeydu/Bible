import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import kjv from './data/kjv.json';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import BookScreen from './components/BookScreen';
import ChapterScreen from './components/ChapterScreen';
import VerseScreen from './components/VerseScreen';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Book">
        <Stack.Screen
          name="King James Version Bible"
          component={HomeScreen} />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
    margingRight: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  },

});
