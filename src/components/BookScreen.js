import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity , Image} from 'react-native';
import ListEmpty from './ListEmpy';
import ItemSeparator from './ItemSeparator';
import kjv from '../../data/kjv.json';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ThemeContext from '../theme/themeContext';


export default function BookScreen({ navigation }) {

    const [books, setBooks] = useState([]);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const uniqueBooks = [...new Set(kjv.map(item => item.book_name))];
        setBooks(uniqueBooks);
    }, []);

    return (
        <SafeAreaView style={[ { color: theme.color }, { backgroundColor: theme.backgroundColor }]}>
            <FlatList
                data={books}
                ListEmptyComponent={ListEmpty}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Chapter', { chapter: item, book: item })} style={styles.container}>
                        <Text style={[styles.bookTitle, {color:theme.color}]}>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        // backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    bookTitle: {
        fontSize: 22,
        padding: 4,
    },   

});