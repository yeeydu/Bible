import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TextInput, StatusBar, FlatList, StyleSheet, View, Share, Clipboard, Platform } from 'react-native';
import kjv from '../data/kjv.json';
import ListEmpty from './ListEmpy';
import ItemSeparator from './ItemSeparator';
import { SelectableText } from "@alentoma/react-native-selectable-text";


const VerseScreen = ({ route }) => {
    const { book, chapter } = route.params;

    const [verses, setVerses] = useState([]);
    const [itemSeparator, setItemSeparator] = useState(false);

    useEffect(() => {
        const chapterVerses = kjv.filter(item => item.book_name === book && item.chapter === chapter);
        setVerses(chapterVerses);
    }, []);

    //ItemSeparator = itemSeparator? ItemSeparator : null;
    const versesText = verses.map(item => `${item.verse}. ${item.text}`).join('\n\n');


    return (
        <SafeAreaView>
            <Text style={styles.bookTitle} selectable> {book} {chapter}</Text>
            <View style={styles.container}>
                {Platform.OS === 'ios' ? (
                    // iOS requires a textinput for word selections
                    <TextInput
                        selectable
                        //value={item.verse + '. ' + item.text}
                        value={versesText}
                        editable={false}
                        multiline
                        style={styles.bookVerse}
                    />
                ) : (
                    // Android can do word selections just with <Text>
                    <FlatList
                        data={verses}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Text selectable style={styles.bookVerse}>
                                {item.verse}. {item.text}
                            </Text>
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: '#fff',
        paddingBottom: 30,
        marginBottom: 4,
    },
    bookVerse: {
        fontSize: 16,
        padding: 2,
    },
    bookTitle: {
        fontSize: 20,
        padding: 1,
        textAlign: 'center',
        backgroundColor: 'rgba(243, 243, 243, 0.2)',
    }

});

export default VerseScreen;