import React from 'react'
import { Image, TouchableWithoutFeedback, View } from 'react-native'

import styles from './styles'

const ListItem = ({ children, movie, handlePress }) => {
  const { poster_path, backdrop_path } = movie
  const posterUrl = poster_path ? 'http://image.tmdb.org/t/p/w92' + poster_path : 'http://placehold.it/92x168'
  const backdropUrl =
    backdrop_path ?
      'http://image.tmdb.org/t/p/w300' + backdrop_path :
      'http://placehold.it/300x169'

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.root}>
        <Image
          source={{ uri: backdropUrl }}
          style={styles.backdrop}
        />
        <View style={styles.container}>
          <View style={styles.posterContainer}>
            <Image
              source={{ uri: posterUrl }}
              style={styles.poster}
              onPress={handlePress}
            />
          </View>
          <View style={styles.infoContainer}>
            {children}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItem
