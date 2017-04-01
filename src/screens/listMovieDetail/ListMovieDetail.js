import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { fetchWatched, fetchList, resetSelected, saveList, saveWatched, setSelected } from '../../actions'
import { BackButton, LoadingScreen, MovieDetail } from '../common'

import ListDetailActions from './ListDetailActions'
import { routeNames } from '../../constants'

class ListMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSimilarPress = this.handleSimilarPress.bind(this)
    this.handleTrailer = this.handleTrailer.bind(this)
    this.handleWatched = this.handleWatched.bind(this)
  }

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
    if (!this.props.selectedMovie.videos.length) {
      alert(`No trailer info for the movie "${this.props.selectedMovie.details.title}"`)
      return
    }
    this.props.navigation.navigate(routeNames.watchlist.trailer)
  }

  handleSimilarPress(movie) {
    this.props.setSelected(movie)
    this.props.navigation.navigate(routeNames.watchlist.similar)
  }

  render() {
    // console.info('props', this.props)
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={this.props.selectedMovie} handleSimilarPress={this.handleSimilarPress}>
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

export default connect(mapStateToProps, { fetchList, fetchWatched, resetSelected, saveList, saveWatched, setSelected })(ListMovieDetail)
