import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, TextInput, StatusBar, FlatList, StyleSheet, View, Share, Clipboard, Platform } from 'react-native';
import kjv from '../../data/kjv.json';
import ListEmpty from './ListEmpy';
import ItemSeparator from './ItemSeparator';
import ThemeContext from '../theme/themeContext';


const VerseScreen = ({ route }) => {
    const { book, chapter } = route.params;

    const [verses, setVerses] = useState([]);
    const [itemSeparator, setItemSeparator] = useState(false);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const chapterVerses = kjv.filter(item => item.book_name === book && item.chapter === chapter);
        setVerses(chapterVerses);
    }, []);

    //ItemSeparator = itemSeparator? ItemSeparator : null;
    const versesText = verses.map(item => `${item.verse}. ${item.text}`).join('\n\n');

    const handleShare = (text) => {
        Share.share({
          message: text,
        })
          .then(result => console.log(result))
          .catch(errorMsg => console.log(errorMsg));
      };
      

    return (
        <SafeAreaView style={[ { color: theme.color }, { backgroundColor: theme.backgroundColor }]}>
            <Text style={styles.bookTitle}>{book} {chapter} </Text>
            <View style={styles.container}>
                {Platform.OS === 'ios' ? (
                    // iOS requires a textinput for word selections
                    <TextInput
                        selectable
                        //value={item.verse + '. ' + item.text}
                        value={versesText}
                        editable={false}
                        multiline
                        //onPress={() => handleShare(`${item.book_name} ${item.chapter}:${item.verse}. ${item.text}`)}
                        style={[styles.bookVerse, { color: theme.color }]}
                    />
                ) : (
                    // Android can do word selections just with <Text>
                    <FlatList
                        data={verses}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparator}
                        renderItem={({ item }) => (
                            <Text
                                selectable={true}
                                editable={false}
                                multiline={true}
                                selectionColor='grey'
                                onPress={() => handleShare(`${item.book_name} ${item.chapter}:${item.verse}. ${item.text}`)}
                                style={[styles.bookVerse, { color: theme.color }]}
                            >
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
        paddingTop: 0,
        paddingBottom: 0,
    },
    bookVerse: {
        fontSize: 16,
        padding: 2,
    },
    bookTitle: {
        fontSize: 0,
        padding: 0,
        textAlign: 'center',
        color: 'rgba(000, 000, 000, 0.0)',
    }

});

export default VerseScreen;