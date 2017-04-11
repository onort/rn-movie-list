import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors, font, fontSize } from '../../../theme'
import { colorize } from '../../../utils'

const ItemInfo = ({ movie, handlePress }) => {
  const { original_title, vote_average } = movie.details
  const score = vote_average > 0 ? (vote_average).toFixed(1) : '?'
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{original_title}</Text>
        </View>
        <View style={styles.timeContainer}>
          <View style={[styles.scoreBadge, { backgroundColor: colorize(vote_average) }]}>
            <Text style={styles.score}>{score}</Text>
          </View>
          { movie.watched_on ?
            <Text style={styles.time}>Watched {moment(movie.watched_on).fromNow()}</Text> :
            <Text style={styles.time}>No data</Text>
          }
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Icon name="keyboard-arrow-right" color={colors.white} size={40} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 5,
    flexDirection: 'column',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-between'
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontFamily: font.title,
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  time: {
    color: colors.white,
    fontSize: fontSize.xsmall,
    fontFamily: font.roboReg,
  },
  scoreBadge: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 40,
    maxHeight: 25,
  },
  score: {
    color: colors.white,
    fontSize: fontSize.xsmall,
    fontFamily: font.title,
  },
})

export default ItemInfo
