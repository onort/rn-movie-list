import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { fetchList, getMovieDetails, resetSelected } from '../../actions'
import { LoadingScreen, MovieDetail } from '../common'
import ListDetailActions from './ListDetailActions'

import localApi from '../../api/localStorage'

class ListMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  static navigationOptions = {
    title: ({ state }) => state.params.title
  }

  componentWillUnmount() {
    this.props.resetSelected()
  }

  onAction() {
    console.log('Button Pressed in ListDetailActions')
  }

  async handleDelete() {
    console.log('Deleting movie')
    // TODO: prompt a confirm
    const { list, navigation, selectedMovie } = this.props
    const newList = list.filter(movie => movie.id !== selectedMovie.id)
    await localApi.saveWatchlist(newList)
      .then(() => {
        // TODO: show toastr? !! Show it on watchlist? or global toastr?
        this.props.fetchList()
        navigation.goBack()
      })
      .catch((err) => console.log('Error on handleDelete', err))
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={this.props.selectedMovie}>
          <ListDetailActions onPress={this.onAction} onDelete={this.handleDelete} />
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
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps, { fetchList, getMovieDetails, resetSelected })(ListMovieDetail)
