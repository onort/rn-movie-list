import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors, font, fontSize } from '../../../../theme'

const Genres = ({ genres }) => {
  return (
    <View style={styles.container}>
      <View style={styles.genresContainer}>
        {genres.map(Badge)}
      </View>
    </View>
  )
}

const Badge = (genre) => (
  <View key={genre.id} style={styles.badge}>
    <Text style={styles.text}>{genre.name}</Text>
  </View>
)

const styles = {
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  genresContainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: colors.white,
    // elevation: 1,
    // height: null,
    flexWrap: 'wrap',
    // borderColor: 'red',
    // borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  badge: {
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
