import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors, font, fontSize } from '../../../../theme'

const Overview = ({ overview }) => {
  return (
    <View>
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>Summary</Text>
        { overview ?
          <Text style={styles.overview}>{overview}</Text> :
          <Text style={styles.overview}>There is no summary for this movie. :(</Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overviewContainer: {
    minHeight: 173,
    padding: 20,
    paddingTop: 10,
    backgroundColor: colors.white,
    elevation: 1,
  },
  title: {
    fontSize: fontSize.medium,
    fontFamily: font.title,
    color: colors.gray70,
  },
  overview: {
    fontSize: fontSize.small,
    color: colors.gray70,
    fontFamily: font.roboReg,
    lineHeight: 24,
  },
})

export default Overview
