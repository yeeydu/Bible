import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListEmpty from './ListEmpy';
import ItemSeparator from './ItemSeparator';
import BookScreen from './BookScreen';
import kjv from '../data/kjv.json';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';


export default function HomeScreen({ navigation }) {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const allBooks = kjv.map(item => item.book_name);
        setBooks(allBooks);
    }, []);



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text
                onPress={() => navigation.navigate('Books', { book: books })}
                style={styles.bookVersion}>
                KJV - King James Version Bible
            </Text>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    bookVersion: {
        fontSize: 16,
        backgroundColor: '#f3f3f3',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        textAlign: 'center',
      },
});
