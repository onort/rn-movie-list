import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { resetSelected } from '../../actions'
import { MovieDetail } from '../common'

class SearchMovieDetail extends Component {

  static navigationOptions = {
    title: 'Search Movie Detail',
  }

  componentWillUnmount() {
    this.props.resetSelected()
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      <MovieDetail movie={this.props.selectedMovie} />
    </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps, { resetSelected })(SearchMovieDetail)
