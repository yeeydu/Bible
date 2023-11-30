import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import kjv from '../../data/kjv.json';
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
                source={require("../images/kj.jpg")}
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
                <Text style={styles.about} onPress={()=> navigation.navigate('About')}>
                    About
                </Text>
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
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backgroundImage: {
        opacity: 0.93,
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
        borderColor: '#CCFFCC',
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: 'rgba(222, 222, 222, 0.3)',
        margin: 6,
    },
    about: {
        fontSize: 14,
        paddingTop: 8,
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'flex-end',
    },
});
