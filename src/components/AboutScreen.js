import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import ItemSeparator from './ItemSeparator';
import ThemeContext from '../theme/themeContext';
import { Image } from 'react-native';

export default function AboutScreen() {

  const theme = useContext(ThemeContext);


  return (
    <View style={[styles.container, { color: theme.color }]}>
      <Text style={[styles.text, { color: theme.color }]}>The King James Version (KJV), also the King James Bible (KJB) and the Authorized Version (AV) is an Early Modern English translation of the Christian Bible for the Church of England, which was commissioned in 1604 and published in 1611, by sponsorship of King James VI and I.
      </Text>
      <Text style={[styles.text, { color: theme.color }]}>
        The King James Bible has long been celebrated as one of the most significant texts of all time, not only for its accessible portrayal of the Christian religion, but also for its ability to spread the English language worldwide to become the dominant global language (in both a commercial and cultural sense) that it is today.
      </Text>
      <Text style={[styles.subTitle, { color: theme.color }]}>
        Copyright status
      </Text>
      <Text style={[styles.text, { color: theme.color }]}>

        The Authorized Version is in the public domain in most of the world. In the United Kingdom, the right to print, publish and distribute it is a royal prerogative and the Crown licenses publishers to reproduce it under letters patent.
      </Text>
      <ItemSeparator />
      <Text style={[styles.subColaborate, { color: theme.color }]}>
        Colaborate
      </Text>
      <Text style={[styles.subColaborate, styles.link,]} onPress={() => Linking.openURL('https://buymeacoffee.com/extramedia19')}>
        👉 By a Coffee
      </Text >
      <TouchableOpacity onPress={() => Linking.openURL('https://www.paypal.com/donate/?hosted_button_id=T9T42YNB9QJ2A')}>
        <Text style={[styles.subColaborate, styles.link,]}>
          👉 Donate
        </Text>
        <Image
          source={require("../images/donates.png")}
          style={styles.donateImage}
        />
      </TouchableOpacity>
      {/* <Text style={[styles.subColaborate, styles.link,]} onPress={() => Linking.openURL('https://www.paypal.com/donate/?hosted_button_id=T9T42YNB9QJ2A')}>
        👉Donate
      </Text> */}
      <ItemSeparator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 24,
  },
  text: {
    fontSize: 16,
    padding: 4,
    color: '#000',
    textAlign: 'justify',
  },
  subTitle: {
    fontSize: 16,
    padding: 4,
    color: '#000',
    fontWeight: 'bold',
  },
  subColaborate: {
    fontSize: 20,
    padding: 8,
    color: '#0096FF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: '#0096FF',
    textDecorationLine: 'underline',
  },
  donateImage: {
    alignSelf: "center",
    resizeMode: 'contain',
    width: 150,
  },
});