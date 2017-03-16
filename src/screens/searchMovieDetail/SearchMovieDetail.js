import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { getMovieDetails, resetSelected } from '../../actions'
import { LoadingScreen, MovieDetail } from '../common'

class SearchMovieDetail extends Component {

  static navigationOptions = {
    title: 'Search Movie Detail',
  }

  componentWillMount() {
    const { id } = this.props.selectedMovie
    if (id) {
      this.props.getMovieDetails(id)
    }
  }

  componentWillUnmount() {
    this.props.resetSelected()
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={this.props.selectedMovie} />
      }
    </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps, { getMovieDetails, resetSelected })(SearchMovieDetail)
