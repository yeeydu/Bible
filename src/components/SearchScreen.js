import React, { useState, useContext } from 'react';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ThemeContext from '../theme/themeContext';
import theme from '../theme/theme';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  const handleSearch = () => {
    // Navigate to the SearchResultsScreen with the query parameter
    if (query === '') {
      setErrorMessage('Please enter a search query.');
      return;
    } else {
      navigation.navigate('Result', { query });
      setErrorMessage('');
    }
  };

  const handleChange = (text) => {
    // Clear the error message when the user starts typing
    setErrorMessage('');
    // Update the query
    setQuery(text);
  };

  return (
    <View style={[styles.container, { color: theme.color }]}>
      <TextInput
        placeholder="Your search..."
        value={query}
        style={[styles.input, { color: theme.color }]}
        onChangeText={handleChange}
      />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TouchableOpacity
        onPress={handleSearch}
        style={[styles.button, { color: theme.color }]}>
        <Text style={styles.searchText}>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    margingRight: 10,
    marginTop: 10,
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
    marginTop: 10,
  },
  searchText: {
    fontSize: 16,
    padding: 4,
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'rgba(232, 231, 122, 0.3)',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
  },

});