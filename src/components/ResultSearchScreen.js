import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Share } from 'react-native';
import kjv from '../../data/kjv.json';
import ThemeContext from '../theme/themeContext';
import ItemSeparator from './ItemSeparator';

const ResultSearchScreen = ({ route }) => {
    const { query } = route.params;
    const theme = useContext(ThemeContext);

    const verseResults = kjv.filter((item) => item.text.toLowerCase().includes(query.toLowerCase()));
    const versesText = verseResults.map(item => `${item.book_name} ${item.chapter}:${item.verse} - ${item.text}`).join('\n\n');

    const handleShare = (text) => {
        Share.share({
          message: text,
        })
          .then(result => console.log(result))
          .catch(errorMsg => console.log(errorMsg));
      };

    return (
        <View style={styles.container}>
            <Text style={[styles.queryText, { color: theme.color }]}>Search Results for "{query}"</Text>
            {Platform.OS === 'ios' ? (
                    // iOS requires a textinput for word selections
                    <TextInput
                        selectable
                        //value={item.verse + '. ' + item.text}
                        value={versesText}
                        ItemSeparatorComponent={ItemSeparator}
                        editable={false}
                        multiline
                        style={[styles.bookVerse, { color: theme.color }]}
                    />
                ) : (
                    // Android can do word selections just with <Text>
                    <FlatList
                        data={verseResults}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparator}
                        renderItem={({ item }) => (
                            <Text
                                selectable={true}
                                editable={false}
                                multiline={true}
                                selectionColor='grey'
                                style={[styles.bookVerse, { color: theme.color }]}
                                onPress={() => handleShare(`${item.book_name} ${item.chapter}:${item.verse}. ${item.text}`)}
                            >
                                {item.book_name} {item.chapter}:{item.verse} - {item.text}
                            </Text>
                        )}
                    />

                )}
        </View>
    );
};

export default ResultSearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        margingRight: 10,
        marginTop: 10,
    },
    queryText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    bookVerse: {
        fontSize: 16,
        padding: 2,
    },
});