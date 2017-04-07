import React from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

const PosterRoll = ({ movies, handlePress }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => Movie(movie, handlePress))}
      </ScrollView>
    </View>
  )
}

const Movie = (movie, handlePress) => {
  const { id, poster_path } = movie
  const posterSrc =
    poster_path ?
      { uri: `http://image.tmdb.org/t/p/w154${poster_path}` } :
      require('../../_assets/noPoster.png');
  return (
    <View key={id} style={styles.movieContainer}>
      <TouchableOpacity onPress={() => handlePress(movie)}>
         <Image
          source={posterSrc}
          style={styles.poster}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 180,
  },
  movieContainer: {
    marginHorizontal: 5,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 5,
  },
})

export default PosterRoll
