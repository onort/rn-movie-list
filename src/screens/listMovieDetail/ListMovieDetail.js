import React, { Component } from 'react'
import { Alert, ToastAndroid, View } from 'react-native'
import { connect } from 'react-redux'

import {
  fetchWatched,
  fetchList,
  resetInList,
  saveList,
  saveWatched,
  setInList,
  setNotListed
} from '../../actions'
import { routeNames } from '../../constants'
import { colors } from '../../theme'

import { BackButton, LoadingScreen, MovieDetail } from '../common'
import ListDetailActions from './ListDetailActions'

class ListMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSimilarPress = this.handleSimilarPress.bind(this)
    this.handleTrailer = this.handleTrailer.bind(this)
    this.handleWatched = this.handleWatched.bind(this)
    this.onDelete = this.onDelete.bind(this)
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
    this.props.resetInList()
  }

  onDelete() {
    const title = 'Removing Movie'
    const message = `Are you sure you want to remove the movie "${this.props.inList.details.title}" from your watchlist?`
    const buttons = [ { text: 'Remove', onPress: this.handleDelete }, { text: 'Cancel' }]
    Alert.alert(title, message, buttons)
  }

  async handleDelete() {
    const { list, navigation, inList } = this.props
    const newList = list.filter(movie => movie.id !== inList.id)
    await this.props.saveList(newList)
      .then(() => {
        this.props.fetchList()
        ToastAndroid.showWithGravity('Movie Deleted', ToastAndroid.LONG, ToastAndroid.TOP)
        navigation.goBack()
      })
      .catch((err) => {
        console.log('Error on handleDelete', err)
        ToastAndroid.showWithGravity('An Error Has Occured While Deleting', ToastAndroid.LONG, ToastAndroid.TOP)
      })
  }

  async handleWatched() {
    const { 
      fetchList,
      fetchWatched,
      list,
      navigation,
      inList: movie,
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
        ToastAndroid.showWithGravity('Movie Marked Watched', ToastAndroid.LONG, ToastAndroid.TOP)
        navigation.goBack()
      })
      .catch(err => {
        console.log('Error on handleWatched', err)
        ToastAndroid.showWithGravity('An Error Has Occured', ToastAndroid.LONG, ToastAndroid.TOP)
      })
  }

  handleTrailer() {
    if (!this.props.inList.videos.length) {
      Alert.alert('No Trailer' ,`No trailer info for the movie "${this.props.inList.details.title}"`)
      return
    }
    this.props.navigation.navigate(routeNames.watchlist.trailer)
  }

  handleSimilarPress(movie) {
    this.props.setNotListed(movie)
    this.props.navigation.navigate(routeNames.watchlist.similar)
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading.screen ?
        <LoadingScreen color={colors.gray20} size={50} backgroundColor={colors.gray90} /> :
        <MovieDetail movie={this.props.inList} handleSimilarPress={this.handleSimilarPress}>
          <ListDetailActions
            onDelete={this.onDelete}
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
    inList: state.inList,
    list: state.list,
    loading: state.loading,
    watched: state.watched
  }
}

export default connect(mapStateToProps, { fetchList, fetchWatched, resetInList, saveList, saveWatched, setInList, setNotListed })(ListMovieDetail)
