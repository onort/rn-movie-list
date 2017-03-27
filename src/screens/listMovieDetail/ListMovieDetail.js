import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { fetchWatched, fetchList, getMovieDetails, resetSelected, saveList, saveWatched } from '../../actions'
import { LoadingScreen, MovieDetail } from '../common'

import ListDetailActions from './ListDetailActions'

class ListMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleTrailer = this.handleTrailer.bind(this)
    this.handleWatched = this.handleWatched.bind(this)
  }

  static navigationOptions = {
    header: ({ state }) => ({
      // title: state.params.title,
      // right: <View><Text>Hello</Text></View>,
      style: { backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, right: 0, },
      tintColor: '#fff'
      // visible: false
    })
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
    movie.watched_on = new Date().getTime()
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

  handleTrailer() {
    this.props.navigation.navigate('Trailer')
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={this.props.selectedMovie}>
          <ListDetailActions
            onDelete={this.handleDelete}
            onTrailer={this.handleTrailer}
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
