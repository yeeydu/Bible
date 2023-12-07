import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ImageBackground, StyleSheet, Text, View, useColorScheme } from 'react-native';
import kjv from '../../data/kjv.json';
import { SafeAreaView } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect, useContext } from 'react';
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';
import { EventRegister } from 'react-native-event-listeners'
import ThemeContext from '../theme/themeContext';
import theme from '../theme/theme';
//import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';


export default function HomeScreen({ navigation }) {

    const [books, setBooks] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const allBooks = kjv.map(item => item.book_name);
        setBooks(allBooks);
    }, []);

    //const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER 'ca-app-pub-9193627783332519~7262351262';
    //const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER  : 'ca-app-pub-3940256099942544/6300978111';


    return (
        <SafeAreaView style={[styles.container, { color: theme.color }, { backgroundColor: theme.backgroundColor }]}>
            {/* <Image
                source={require("../images/kj.jpg")}
                style={styles.backgroundImage}
            /> */}
            {/* <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            /> */}
            <TouchableOpacity
                onPress={() => navigation.navigate('Books', { book: books })}
                style={[styles.button, { color: theme.color }]}>
                <Text style={styles.bookVersion}>
                    KJV - King James Bible
                </Text>
            </TouchableOpacity>
            <Switch
                style={styles.switch}
                value={darkMode}
                onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit('changeThemeEvent', value);
                }} />
            <Text style={[styles.darkModeText, { color: theme.color }]}>
                Dark Mode
            </Text>
            {/* <Text style={[styles.about, { color: theme.color }]} onPress={() => navigation.navigate('About')}>
                About
            </Text> */}
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
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backgroundImage: {
        justifyContent: 'center',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    button: {
        alignSelf: "center",
        padding: 8,
        width: 300,
        borderColor: '#eee',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.4,
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: 'rgba(232, 231, 122, 0.9)',
        marginBottom: 6,
    },
    about: {
        fontSize: 14,
        padding: 8,
        textAlign: 'center',
        justifyContent: 'flex-end'
    },
    darkModeText: {
        fontSize: 12,
        paddingBottom: 10,
        paddingTop: 0,
        textAlign: 'center',
        justifyContent: 'flex-end'
    },
    switch: {
        marginTop: 2,
        alignSelf: 'center',
    }
});
