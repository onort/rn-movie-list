import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { fetchWatched, fetchList, getMovieDetails, resetSelected, saveList, saveWatched } from '../../actions'
import { BackButton, LoadingScreen, MovieDetail } from '../common'

import Actions from './WatchedMovieActions'

class WatchedMovieDetail extends Component {

  static navigationOptions = {
    header: ({ goBack }) => ({
      style: { backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, right: 0, },
      left: <BackButton onBack={() => goBack()} />
    }),
    tabBar: {
      visible: false,
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
        <MovieDetail movie={this.props.selectedMovie}>
          <Actions />
        </MovieDetail>
      }
    </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
    loading: state.loading,
    selectedMovie: state.selectedMovie,
    watched: state.watched
  }
}

export default connect(mapStateToProps, { fetchList, fetchWatched, getMovieDetails, resetSelected, saveList, saveWatched })(WatchedMovieDetail)
