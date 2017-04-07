import React from 'react'
import { Image, ScrollView, View, Text, StyleSheet } from 'react-native'

import { colors, font, fontSize } from '../../../../theme'

const CastList = ({ cast }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cast</Text>
      </View>
      <View style={styles.castContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cast.map(Person)}
        </ScrollView>
      </View>
    </View>
  )
}

const Person = (person) => {
  const { cast_id, character, name, profile_path } = person
  const imageSrc =
    profile_path ?
    { uri: `http://image.tmdb.org/t/p/w185${profile_path}` } :
    require('../../../_assets/person.png');
  return (
    <View key={cast_id} style={styles.personContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={imageSrc}
          style={styles.image}
        />
      </View>
      <View style={styles.metaContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.char}>{character}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: fontSize.medium,
    fontFamily: font.title,
    color: colors.gray70,
  },
  castContainer: {
    flex: 1,
    backgroundColor: colors.white,
    elevation: 1,
    // borderTopColor: colors.gray20,
    // borderTopWidth: 1,
    // borderBottomColor: colors.gray20,
    // borderBottomWidth: 1,
  },
  personContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 100,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  imageContainer: {
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    // resizeMode: 'contain'
  },
  metaContainer: {
    flex: 1,
  },
  nameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  name: {
    textAlign: 'center',
    fontSize: fontSize.small,
    color: colors.gray70,
    fontFamily: font.roboReg,
  },
  charContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  char: {
    textAlign: 'center',
    color: colors.gray50,
    fontSize: fontSize.xsmall,
    fontFamily: font.roboReg,
  }
})

export default CastList
