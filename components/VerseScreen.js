import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, StyleSheet, View } from 'react-native';
import kjv from '../data/kjv.json';
import ListEmpty from './ListEmpy';
import ItemSeparator from './ItemSeparator';

const VerseScreen = ({ route }) => {
    const { book, chapter } = route.params;
    // console.log('Chapter:', chapter); 
    // console.log('Book:', book); 
    const [verses, setVerses] = useState([]);
    const [itemSeparator , setItemSeparator] = useState(false);

    useEffect(() => {
        const chapterVerses = kjv.filter(item => item.book_name === book && item.chapter === chapter);
        setVerses(chapterVerses);
    }, []);

    //ItemSeparator = itemSeparator? ItemSeparator : null;

    return (
        <SafeAreaView>
        <Text style={styles.bookTitle}> {book} {chapter}</Text>
            <FlatList
                data={verses}
                ItemSeparatorComponent={ItemSeparator}
                ListEmptyComponent={ListEmpty}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Text style={styles.bookVerse}>
                            {item.verse}. {item.text}
                        </Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: '#fff',
    },
    bookVerse: {
        fontSize: 16,
        padding: 2,
    },
    bookTitle: {
        fontSize: 20,
        padding: 2,
        textAlign: 'center',
        backgroundColor: 'rgba(243, 243, 243, 0.0)',
    }
    
});

export default VerseScreen;