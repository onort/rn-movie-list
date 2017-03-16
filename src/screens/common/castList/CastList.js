import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

const CastList = ({ cast }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cast:</Text>
      </View>
      <View style={styles.castContainer}>
        <ScrollView horizontal>
          {cast.map(person => (
            <View key={person.id} style={styles.personContainer}>
              <Text>{person.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 2
  },
  titleContainer: {
    height: 30,
    borderColor: 'black',
    borderWidth: 2
  },
  title: {
    fontSize: 24
  },
  castContainer: {
    flex: 1,
    backgroundColor: '#cecece',
    borderColor: 'black',
    borderWidth: 2
  },
  personContainer: {
    height: 80,
    width: 80,
    margin: 5,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6
  }
})

export default CastList
