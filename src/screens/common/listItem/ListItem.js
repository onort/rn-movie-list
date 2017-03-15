import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Colors from '../colors'

const ListItem = ({ children, movie, handlePress }) => {
  const { title, poster_path } = movie
  const posterUrl = 'http://image.tmdb.org/t/p/w92/'
  return (
    <View style={styles.listItemContainer}>
      <Image
        source={{ uri: `${posterUrl}${poster_path}`}}
        style={[styles.movieImage]}
      />
      <View style={styles.metaContainer}>
        <View style={styles.movieMeta}>
          <Text style={styles.movieTitle} onPress={handlePress}>
            {title}
          </Text>
        </View>
        { children }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listItemContainer: {
    margin: 5,
    flexDirection: 'row'
  },
  movieImage: {
    width: 92,
    height: 138,
    borderRadius: 5,
  },
  metaContainer: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.white
  },
  movieMeta: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
    color: Colors.black,
  }

})

export default ListItem
