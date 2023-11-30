import { View, Text, StyleSheet, Linking } from 'react-native'
import React from 'react'
import ItemSeparator from './ItemSeparator';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The King James Version (KJV), also the King James Bible (KJB) and the Authorized Version (AV) is an Early Modern English translation of the Christian Bible for the Church of England, which was commissioned in 1604 and published in 1611, by sponsorship of King James VI and I.
      </Text>
      <Text style={styles.text}>
        The King James Bible has long been celebrated as one of the most significant texts of all time, not only for its accessible portrayal of the Christian religion, but also for its ability to spread the English language worldwide to become the dominant global language (in both a commercial and cultural sense) that it is today.
      </Text>
      <Text style={styles.subTitle}>
        Copyright status
      </Text>
      <Text style={styles.text}>

        The Authorized Version is in the public domain in most of the world. In the United Kingdom, the right to print, publish and distribute it is a royal prerogative and the Crown licenses publishers to reproduce it under letters patent.
      </Text>
      <ItemSeparator />
      <Text style={styles.subColaborate}>
        Colaborate
      </Text>
      <Text style={styles.subColaborate} onPress={() => Linking.openURL('https://buymeacoffee.com/extramedia19')}>
        By a Coffee
      </Text>
      <Text style={styles.subColaborate} onPress={() => Linking.openURL('https://buymeacoffee.com/extramedia19')}>
        DONATE
      </Text>
      <ItemSeparator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});