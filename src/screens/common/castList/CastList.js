import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

import { colors, fontSize } from '../../../theme'

const CastList = ({ cast }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cast:</Text>
      </View>
      <View style={styles.castContainer}>
        <ScrollView horizontal>
          {cast.map(person => (
            <View key={person.cast_id} style={styles.personContainer}>
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
    borderColor: colors.black,
    borderWidth: 2
  },
  titleContainer: {
    height: 30,
    borderColor: colors.black,
    borderWidth: 2
  },
  title: {
    fontSize: fontSize.large
  },
  castContainer: {
    flex: 1,
    backgroundColor: colors.grey,
    borderColor: colors.black,
    borderWidth: 2
  },
  personContainer: {
    height: 80,
    width: 80,
    margin: 5,
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 6
  }
})

export default CastList
