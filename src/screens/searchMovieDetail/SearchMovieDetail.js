import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { getMovieDetails, resetSelected } from '../../actions'
import { LoadingScreen, MovieDetail } from '../common'
import SearchDetailActions from './SearchDetailActions'

import localApi from '../../api/localStorage'

class SearchMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

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
    console.log('Getting data')
    localApi.getWatchlist()
  }

  handleAdd() {
    console.log('Saving data')
    localApi.saveWatchlist([this.props.selectedMovie])
  }

  render() {
    console.log('SearchDetail logs props', this.props)
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={this.props.selectedMovie}>
          <SearchDetailActions onPress={this.onAction} onAdd={this.handleAdd} />
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
