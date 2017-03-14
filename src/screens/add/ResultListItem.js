import React, { Component, PropTypes } from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'


class ResultListItem extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    movie: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired
  }

  render() {
    if (this.props.movie) {
      const { title, release_date, overview, poster_path } = this.props.movie
      const { navigate } = this.props
      const posterUrl = 'http://image.tmdb.org/t/p/w92/'
      return (
        <View>
          <Text onPress={() => navigate('MovieDetail')}>{title}</Text>
          <Text>{release_date}</Text>
        </View>
      )
    } else return null
  }
}

export default ResultListItem
