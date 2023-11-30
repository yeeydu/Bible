import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import kjv from '../../data/kjv.json';
import { useNavigation } from "@react-navigation/native";
import ListEmpty from './ListEmpy';
import ItemSeparator from './ItemSeparator';

const ChapterScreen = ({ route, navigation }) => {
  const { book } = route.params;
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const bookChapters = kjv.filter(item => item.book_name === book);
    const uniqueChapters = [...new Set(bookChapters.map(item => item.chapter))];
    setChapters(uniqueChapters);
  }, []);

  
  return (
    <SafeAreaView>
      {/* <Text style={styles.bookTitle}>{book}</Text> */}
      <FlatList
        data={chapters}
        numColumns={5}
        // ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={ListEmpty}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Verse', { chapter: item, book: book })} style={styles.container}>
            <Text style={styles.bookChapter}> {item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    // height: 50,
  },
  bookChapter: {
    fontSize: 26,
    backgroundColor: '#f3f3f3',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 20,
    padding: 4,
    textAlign: 'center',
    backgroundColor: 'rgba(243, 243, 243, 0.5)',
  }

});
export default ChapterScreen;