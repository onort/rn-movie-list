import React from 'react'
import { Text, View } from 'react-native'

import { colors, font, fontSize } from '../../../../theme'


const MovieMeta = ({ details }) => {
  const { release_date, runtime, vote_average, vote_count } = details
  return (
    <View style={{ flex: 1, marginVertical: 10, alignItems: 'center' }}>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{vote_average}</Text>
      </View>
        <Text>{vote_count} votes</Text>
      <View>
        <Text>{release_date}</Text>
        <Text>{runtime} mins</Text>
      </View>
    </View>
  )
}

const styles = {
  scoreContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.green,
    width: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  score: {
    color: colors.white,
    fontSize: fontSize.default,
    fontFamily: font.openSansBold,
  }
}

export default MovieMeta
