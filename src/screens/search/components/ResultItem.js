import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import { colors, font, fontSize } from '../../../theme'
import { colorize } from '../../../utils'


const ResultItem = ({ movie, handlePress }) => {
  const { title, poster_path, release_date, vote_average } = movie
  const posterSrc =
    poster_path ?
      { uri: `http://image.tmdb.org/t/p/w92${poster_path}` } :
      require('../../_assets/noPoster.png');
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.resultContainer}>
        <View style={styles.posterContainer}>
          <Image
            style={styles.poster}
            source={posterSrc}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.release}>{release_date.slice(0,4)}</Text>
          { vote_average > 0 &&
          <View style={styles.vote}>
            <View style={[styles.scoreBadge, { backgroundColor: colorize(vote_average) }]}>
              <Text style={styles.score}>{(vote_average).toFixed(1) || '?'}</Text>
            </View>
          </View>
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    height: 100,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: colors.gray90,
    marginBottom: 5,
    elevation: 2,

  },
  posterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    height: 90,
    width: 60
  },
  titleContainer: {
    flex: 3,
    borderLeftColor: colors.gray70,
    borderLeftWidth: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.default
  },
  release: {
    fontSize: fontSize.small,
    flexGrow: 1,
    color: colors.gray40,
  },
  vote: {
    flexDirection: 'row'
  },
  scoreBadge: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 25,
  },
  score: {
    color: colors.white,
    fontSize: fontSize.xsmall,
    fontFamily: font.openSansBold,
  },
})

export default ResultItem
