import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors, font, fontSize } from '../../../../theme'

const Overview = ({ overview }) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Summary:</Text>
      </View>
      <View style={styles.overviewContainer}>
        { overview ?
          <Text style={styles.overview}>{overview}</Text> :
          <Text style={styles.overview}>There is no summary for this movie. :(</Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: fontSize.medium,
    fontFamily: font.title,
    color: colors.black
  },
  overviewContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: colors.white,
    elevation: 1,
  },
  overview: {
    fontSize: fontSize.small,
    color: colors.black,
    fontFamily: font.roboReg,
    lineHeight: 24,
  },
})

export default Overview
