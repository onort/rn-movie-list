import React from 'react'
import { Text, View } from 'react-native'

import { colors, font, fontSize } from '../../../../theme'

const Genres = ({ genres }) => {
  return (
    <View style={styles.genresContainer}>
      {genres.map(Badge)}
    </View>
  )
}

const Badge = (genre) => (
  <View key={genre.id} style={styles.badge}>
    <Text style={styles.text}>{genre.name}</Text>
  </View>
)

const styles = {
  genresContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    margin: 10,
    // borderColor: 'red',
    // borderWidth: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  badge: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: colors.gray60,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.xsmall,
    fontFamily: font.title,
  }
}

export default Genres
