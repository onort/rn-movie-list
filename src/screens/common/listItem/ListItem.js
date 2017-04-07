import React from 'react'
import { Image, TouchableWithoutFeedback, View } from 'react-native'

import styles from './styles'

const ListItem = ({ children, movie, handlePress }) => {
  const { poster_path, backdrop_path } = movie
  const posterSrc =
    poster_path ?
      { uri: `http://image.tmdb.org/t/p/w92${poster_path}` } :
      require('../../_assets/noPoster.png');
  const backdropSrc =
    backdrop_path ?
      { uri :`http://image.tmdb.org/t/p/w300${backdrop_path}` } :
      require('../../_assets/noBackdrop.png');

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.root}>
        <Image
          source={backdropSrc}
          style={styles.backdrop}
        />
        <View style={styles.container}>
          <View style={styles.posterContainer}>
            <Image
              source={posterSrc}
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
