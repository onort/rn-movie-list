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
  const posterUrl = poster_path ? 'http://image.tmdb.org/t/p/w154' + poster_path : 'http://placehold.it/154x231'
  return (
    <View key={id} style={styles.movieContainer}>
      <TouchableOpacity onPress={() => handlePress(movie)}>
         <Image
          source={{ uri: posterUrl }}
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
