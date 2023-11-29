import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import ListEmpty from './ListEmpy';
import ItemSeparator from './ItemSeparator';
import BookScreen from './BookScreen';
import kjv from '../data/kjv.json';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeScreen({ navigation }) {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const allBooks = kjv.map(item => item.book_name);
        setBooks(allBooks);
    }, []);


    return (
             <SafeAreaView style={styles.container}>
                <Image 
                    source={require("../assets/images/kj.jpg")}
                    style={styles.backgroundImage}
                />
                <StatusBar style="auto" />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Books', { book: books })}
                    style={styles.button}>
                        <Text style={styles.bookVersion}>

                    KJV - King James Version Bible
                        </Text>
                </TouchableOpacity>
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
    },
    bookVersion: {
        fontSize: 16,
        padding: 8,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        opacity: 0.9,
        justifyContent: 'center',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    button: {
        alignSelf: "center",
        padding: 8,
        width: 330,
        borderColor: '#cccddd',
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: 'rgba(222, 222, 222, 0.3)',
        margin: 6,
         
      },
});
