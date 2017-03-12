import React, { Component, PropTypes } from 'react'
import { Image, Text, View } from 'react-native'
import { connect } from 'react-redux'

import styles from './styles'
import ItemActions from './ItemActions'
import { discardMovie, markWatched } from '../../actions'

class WatchListItem extends Component {

  constructor(props) {
    super(props)
    this.onDiscard = this.onDiscard.bind(this)
    this.onWatched = this.onWatched.bind(this)
  }

  static propTypes = {
    movie: PropTypes.object.isRequired
  }

  onDiscard() {
    this.props.discardMovie(this.props.movie)
  }

  onWatched() {
    this.props.markWatched(this.props.movie)
  }

  render() {
    const { title, release_date, overview, poster_path } = this.props.movie
    const { navigate } = this.props
    const posterUrl = 'http://image.tmdb.org/t/p/w92/'
    return (
      <View style={styles.listItemContainer}>
        <Image
          source={{ uri: `${posterUrl}${poster_path}`}}
          style={[styles.movieImage]}
        />
        <View style={styles.metaContainer}>
          <View style={styles.movieMeta}>
            <Text style={[styles.movieTitle, styles.text]} onPress={() => navigate('MovieDetail')} >
              {title}
            </Text>
          </View>
          <ItemActions
            onDiscard={this.onDiscard}
            onWatched={this.onWatched}
          />
        </View>
      </View>
    )
  }
}

export default connect(null, { discardMovie, markWatched })(WatchListItem)
