import React from 'react'
import { Text, View } from 'react-native'


const MovieDetail = ({ movie }) => {
  const { title } = movie
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, marginTop: 50 }}>{title}</Text>
    </View>
  )
}

export default MovieDetail
