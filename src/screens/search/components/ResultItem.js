import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import { colors, fontSize } from '../../../theme'

import Icon from 'react-native-vector-icons/MaterialIcons'


const ResultItem = ({ movie, handlePress }) => {
  const { title, poster_path, release_date, vote_average } = movie
  const imageUrl = poster_path ? 'http://image.tmdb.org/t/p/w92/' + poster_path : 'http://placehold.it/90x60'
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.resultContainer}>
        <View style={styles.posterContainer}>
          <Image
            style={styles.poster}
            source={{ uri: imageUrl }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.release}>{release_date.slice(0,4)}</Text>
          { vote_average > 0 &&
          <View style={styles.vote}>
            <Icon name="star" color={colors.black} size={fontSize.small + 2} style={styles.icon} />
            <Text>{vote_average}</Text>
          </View>
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    marginBottom: 5,
    elevation: 2,
    // borderColor: 'blue',
    // borderWidth: 1
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
    borderLeftColor: colors.grey,
    borderLeftWidth: 1,
    paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  title: {
    color: colors.black,
    fontSize: fontSize.default
  },
  release: {
    fontSize: fontSize.small,
    flexGrow: 1,
  },
  vote: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    position: 'relative',
    top: 1,
    marginRight: 5
  }
})

export default ResultItem
