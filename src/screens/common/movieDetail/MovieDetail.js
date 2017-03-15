import React from 'react'
import { Text, View } from 'react-native'


const MovieDetail = ({ movie }) => {
  let title = ''
  if (movie.title) title = movie.title
  else title = 'No Title'

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, marginTop: 50 }}>{title}</Text>
    </View>
  )
}

export default MovieDetail
