import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { getMovieDetails, resetSelected } from '../../actions'
import { LoadingScreen, MovieDetail } from '../common'
import SearchDetailActions from './SearchDetailActions'

class SearchMovieDetail extends Component {

  static navigationOptions = {
    title: ({ state }) => state.params.title
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

  onAction() {
    console.log('Button pressed!')
  }

  render() {
    console.log('SearchDetail logs props', this.props)
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={this.props.selectedMovie}>
          <SearchDetailActions onPress={this.onAction} />
        </MovieDetail>
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
