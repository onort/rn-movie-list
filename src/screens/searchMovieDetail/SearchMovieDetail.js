import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { clearSearchResults, fetchList, getMovieDetails, resetSelected, saveList } from '../../actions'
import { LoadingScreen, MovieDetail } from '../common'
import SearchDetailActions from './SearchDetailActions'

import localApi from '../../api/localStorage'

class SearchMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
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

  async handleAdd() {
    console.log('Saving data')
    const { clearSearchResults, fetchList, list, navigation, resetSelected, saveList, selectedMovie, watched } = this.props
    const inList = list.filter(movie => movie.id === selectedMovie.id)
    const inWatched = watched.filter(movie => movie.id === selectedMovie.id)
    if (!inList.length && !inWatched.length) {
      const watchlist = list.concat(selectedMovie)
      await saveList(watchlist)
        .then(() => {
          fetchList()
          resetSelected()
          clearSearchResults()
          navigation.navigate('Home') // navigate to watchlist after you refactor router
        })
        .catch((err) => console.log('Error', err))
    } else {
      // TODO: alert user
      console.log('Movie Already in list/watched')
    }
  }

  handleCancel() {
    this.props.navigation.goBack()
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={this.props.selectedMovie}>
          <SearchDetailActions onCancel={this.handleCancel} onAdd={this.handleAdd} />
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

export default connect(mapStateToProps, { clearSearchResults, fetchList, getMovieDetails, resetSelected, saveList })(SearchMovieDetail)
