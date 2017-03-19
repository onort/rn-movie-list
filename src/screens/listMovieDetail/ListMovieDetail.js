import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { fetchWatched, fetchList, getMovieDetails, resetSelected, saveList, saveWatched } from '../../actions'
import { LoadingScreen, MovieDetail } from '../common'
import ListDetailActions from './ListDetailActions'

import localApi from '../../api/localStorage'

class ListMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleWatched = this.handleWatched.bind(this)
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
    await this.props.saveList(newList)
      .then(() => {
        this.props.fetchList()
        navigation.goBack()
      })
      .catch((err) => console.log('Error on handleDelete', err))
    // TODO: show toastr? !! Show it on watchlist? or global toastr?
  }

  async handleWatched() {
    const { 
      fetchList,
      fetchWatched,
      list,
      navigation,
      selectedMovie: movie,
      saveList,
      saveWatched,
      watched } = this.props
    const newList = list.filter(item => item.id !== movie.id)
    const newWatched = watched.concat(movie)
    Promise.all([await saveWatched(newWatched), await saveList(newList)])
      .then(() => {
        fetchList()
        fetchWatched()
        navigation.goBack()
      })
      .catch(err => console.log('Error on handleWatched', err))
    // show toastr
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={this.props.selectedMovie}>
          <ListDetailActions
            onPress={this.onAction}
            onDelete={this.handleDelete}
            onWatched={this.handleWatched}
          />
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

export default connect(mapStateToProps, { fetchList, fetchWatched, getMovieDetails, resetSelected, saveList, saveWatched })(ListMovieDetail)
