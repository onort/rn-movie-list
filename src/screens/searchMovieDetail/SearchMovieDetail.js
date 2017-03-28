import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { clearSearchResults, fetchList, getMovieDetails, resetSelected, saveList } from '../../actions'

import { BackButton, LoadingScreen, MovieDetail } from '../common'
import SearchDetailActions from './SearchDetailActions'

class SearchMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleTrailer = this.handleTrailer.bind(this)
  }

  static navigationOptions = {
    header: ({ goBack }) => ({
      style: { backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, right: 0, },
      left: <BackButton onBack={() => goBack()} />
    }),
    tabBar: {
      // icon: ({ tintColor }) => <Icon name="add" size={25} color={tintColor} />,
      visible: false,
    }
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

  async handleAdd() {
    console.log('Saving data')
    const { clearSearchResults, fetchList, list, navigation, resetSelected, saveList, selectedMovie, watched } = this.props
    const inList = list.filter(movie => movie.id === selectedMovie.id)
    const inWatched = watched.filter(movie => movie.id === selectedMovie.id)
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [ NavigationActions.navigate({ routeName: 'SearchMovie' }) ]
    })
    if (!inList.length && !inWatched.length) {
      const newMovie = {...selectedMovie, date_added: new Date().getTime()}
      const watchlist = list.concat(newMovie)
      await saveList(watchlist)
        .then(() => {
          fetchList()
          resetSelected()
          clearSearchResults()
          navigation.dispatch(resetAction) // reset searchNav stack
          navigation.navigate('Watchlist')
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

  handleTrailer() {
    if (!this.props.selectedMovie.videos.length) {
      alert(`No trailer info for the movie "${this.props.selectedMovie.details.title}"`)
      return
    }
    this.props.navigation.navigate('Trailer')
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={this.props.selectedMovie}>
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
    selectedMovie: state.selectedMovie,
    watched: state.watched
  }
}

export default connect(mapStateToProps, { clearSearchResults, fetchList, getMovieDetails, resetSelected, saveList })(SearchMovieDetail)
