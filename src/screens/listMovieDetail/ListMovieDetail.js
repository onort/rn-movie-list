import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { resetSelected } from '../../actions'
import { MovieDetail } from '../common'

import moviesApi from '../../api/moviesApi' // for testing

class ListMovieDetail extends Component {

  static navigationOptions = {
    title: 'List Movie Detail',
  }

  async componentWillMount() {
    const { id } = this.props.selectedMovie
    if (id) {
      console.log('componentWillMount fires moviesApi methods')
      // Need error handling here.
      let [movieData, castData] = await Promise.all([
        moviesApi.fetchMovieDetails(id),
        moviesApi.fetchMovieCredits(id)
      ])
      console.log('MovieData', movieData)
      console.log('castData', castData)
    }
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

export default connect(mapStateToProps, { resetSelected })(ListMovieDetail)
