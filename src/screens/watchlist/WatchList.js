import React, { Component, PropTypes } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'
import { Colors } from '../common'

class WatchList extends Component {

  static propTypes = {
    movies: PropTypes.array
  }

  static navigationOptions = {
    tabBar: {
      icon: () => <Icon name="format-list-bulleted" size={25} color={Colors.black} />
    }
  }

  render() {
    const { movies } = this.props
    if (!movies || !movies.length) return this.noMovies()
    else if (movies.length) return this.renderMovies(movies)
  }

  noMovies() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No movies to render</Text>
      </View>
    )
  }

  renderMovies(movies) {
    return (
      <View style={styles.container}>
        {movies.map(movie => <Text key={movie.id} style={styles.text}>{movie.title}</Text>)}
      </View>
    )
  }
}

export default WatchList
