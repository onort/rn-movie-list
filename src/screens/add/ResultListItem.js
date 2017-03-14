import React, { Component, PropTypes } from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'


class ResultListItem extends Component {
  constructor(props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
  }

  static propTypes = {
    movie: PropTypes.object.isRequired,
    // navigate: PropTypes.func.isRequired
  }

  handlePress() {
    this.props.handlePress(this.props.movie)
  }

  render() {
    if (this.props.movie) {
      const { title, release_date, overview, poster_path } = this.props.movie
      const posterUrl = 'http://image.tmdb.org/t/p/w92/'
      return (
        <View>
          <Text onPress={this.handlePress}>{title}</Text>
          <Text>{release_date}</Text>
        </View>
      )
    } else return null
  }
}

export default ResultListItem
