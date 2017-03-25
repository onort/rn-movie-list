import React from 'react'
import { Image, TouchableWithoutFeedback, View } from 'react-native'

import styles from './styles'

const ListItem = ({ children, movie, handlePress }) => {
  const { poster_path, backdrop_path } = movie
  const posterUrl = 'http://image.tmdb.org/t/p/w92/'
  const backdropUrl = 'http://image.tmdb.org/t/p/w300/'
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.root}>
        <Image
          source={{ uri: `${backdropUrl}${backdrop_path}` }}
          style={styles.backdrop}
        />
        <View style={styles.container}>
          <View style={styles.posterContainer}>
            <Image
              source={{ uri: `${posterUrl}${poster_path}`}}
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
