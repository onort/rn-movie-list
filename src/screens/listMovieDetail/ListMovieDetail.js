import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { getMovieDetails, resetSelected } from '../../actions'
import { LoadingScreen, MovieDetail } from '../common'
import ListDetailActions from './ListDetailActions'

class ListMovieDetail extends Component {

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
    console.log('Button Pressed in ListDetailActions')
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={this.props.selectedMovie}>
          <ListDetailActions onPress={this.onAction} />
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

export default connect(mapStateToProps, { getMovieDetails, resetSelected })(ListMovieDetail)
