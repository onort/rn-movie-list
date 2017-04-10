import React, { Component } from 'react'
import { Alert, ToastAndroid, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import {
  clearSearchResults,
  fetchList,
  getMovieDetails,
  resetNotListed,
  saveList,
  setNotListed
} from '../../actions'
import { resetRouteName } from '../../utils'
import { routeNames } from '../../constants'
import { colors } from '../../theme'

import { BackButton, LoadingScreen, MovieDetail } from '../common'
import SearchDetailActions from './SearchDetailActions'

class SearchMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSimilarPress = this.handleSimilarPress.bind(this)
    this.handleTrailer = this.handleTrailer.bind(this)
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

  componentWillMount() {
    const { id } = this.props.notListed
    if (id) {
      this.props.getMovieDetails(id)
    }
  }

  componentWillUnmount() {
    this.props.resetNotListed()
  }

  async handleAdd() {
    const { clearSearchResults, fetchList, list, navigation, resetNotListed, saveList, notListed, watched } = this.props
    const inList = list.filter(movie => movie.id === notListed.id)
    const inWatched = watched.filter(movie => movie.id === notListed.id)
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [ NavigationActions.navigate({ routeName: resetRouteName(navigation.state.routeName) }) ]
    })
    if (!inList.length && !inWatched.length) {
      const newMovie = {...notListed, date_added: new Date().getTime()}
      const watchlist = list.concat(newMovie)
      await saveList(watchlist)
        .then(() => {
          ToastAndroid.showWithGravity('Movie Added', ToastAndroid.LONG, ToastAndroid.TOP)
          fetchList()
          // clearSearchResults()
          // resetNotListed()
          // navigation.dispatch(resetAction)
          // navigation.navigate(routeNames.search.root)
        })
        .catch(err => {
        console.log('Error on handleWatched', err)
        ToastAndroid.showWithGravity('An Error Has Occured While Adding', ToastAndroid.LONG, ToastAndroid.TOP)
      })
    } else if (inList.length > 0) {
      ToastAndroid.showWithGravity('Movie Already in List', ToastAndroid.LONG, ToastAndroid.TOP)
    } else if (inWatched.length > 0) {
      ToastAndroid.showWithGravity('Movie Already Marked As Watched', ToastAndroid.LONG, ToastAndroid.TOP)
    }
  }

  handleCancel() {
    this.props.navigation.goBack()
  }

  handleTrailer() {
    if (!this.props.notListed.videos.length) {
      Alert.alert('No Trailer' ,`Sorry, no trailer info for the movie "${this.props.notListed.details.title}"`)
      return
    }
    this.props.navigation.navigate(routeNames.search.trailer)
  }

  handleSimilarPress(movie) {
    this.props.setNotListed(movie)
    this.props.getMovieDetails(movie.id)
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading.screen ?
        <LoadingScreen color={colors.gray20} size={50} backgroundColor={colors.gray90} /> :
        <MovieDetail movie={this.props.notListed} handleSimilarPress={this.handleSimilarPress}>
          <SearchDetailActions
            onAdd={this.handleAdd}
            onCancel={this.handleCancel}
            onTrailer={this.handleTrailer}
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
    notListed: state.notListed,
    watched: state.watched
  }
}

export default connect(mapStateToProps, { 
  clearSearchResults,
  fetchList,
  getMovieDetails,
  resetNotListed,
  saveList,
  setNotListed
})(SearchMovieDetail)
