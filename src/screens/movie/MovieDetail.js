import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

class MovieDetail extends Component {

  static navigationOptions = {
    title: 'Movies Detail',
  }

  render() {
    return (
      <View>
        <Text>Movie detail view</Text>
      </View>
    )
  }
}

export default MovieDetail
