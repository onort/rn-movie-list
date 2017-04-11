import React, { Component, PropTypes } from 'react'
import { Alert, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { clear, getPopularAndNowPlaying, setNotListed } from '../../actions'
import * as types from '../../actions/types'
import { colors, font, fontSize } from '../../theme'
import { routeNames } from '../../constants'

import { LoadingScreen, PosterRoll } from '../common'
import { AboutModal, Clear, Info } from './components'

class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = { aboutModalOpen: false }
    this.handleAddPress = this.handleAddPress.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handlePosterPress = this.handlePosterPress.bind(this)
    this.openAboutModal = this.openAboutModal.bind(this)
    this.closeAboutModal = this.closeAboutModal.bind(this)
  }

  // PropTypes

  static navigationOptions = {
    header: () => ({ 
      visible: false,
    }),
    tabBar: {
      icon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />
    }
  }

  componentWillMount() {
    const { popular, now } = this.props.home
    if (!popular.length && !now.length) this.props.getPopularAndNowPlaying()
  }

  openAboutModal() {
    this.setState({ aboutModalOpen: true })
  }

  closeAboutModal() {
    this.setState({ aboutModalOpen: false })
  }

  handlePosterPress(movie) {
    this.props.setNotListed(movie)
    this.props.navigation.navigate(routeNames.home.detail)
  }

  handleAddPress() {
    this.props.navigation.navigate(routeNames.search.root)
  }

  handleClear(list) {
    const gotMoviesInList = list === types.WATCHED ? this.props.watched.length : this.props.list.length
    if (!!gotMoviesInList && list === types.WATCHED || list === types.WATCHLIST) {
      const clearList = () => {
        this.props.clear(list)
        const toastMsg =
          list === types.WATCHED ?
          'All movies marked as watched has been cleared' :
          'All movies in your watchlist has been cleared'
        ToastAndroid.showWithGravity(toastMsg, ToastAndroid.LONG, ToastAndroid.TOP)
      }
      const title = list === types.WATCHED ? 'Clearing Watched Movies' : 'Clearing Watchlist'
      const message =
        list === types.WATCHED ?
        'Are you sure that you want to clear all movies marked as watched?' :
        'Are you sure that you want to clear all movies in your watchlist?';
      const buttons = [ 
        { text: 'Do It!', onPress: clearList },
        { text: 'Cancel' }
      ]
      Alert.alert(title, message, buttons)
    }
  }

  watchedInLast30(watched) {
    const msIn30Days = 1000 * 60 * 60 * 24 * 30
    return watched.filter(movie => (new Date().getTime() - movie.watched_on) < msIn30Days ).length
  }

  render() {
    const { home, list, loading, watched } = this.props
    return (
      <View style={{ flex: 1}}>
        <ScrollView contentContainerStyle={styles.container}>
          <AboutModal onClose={this.closeAboutModal} visible={this.state.aboutModalOpen} />
          <View style={{ alignItems: 'flex-end', paddingHorizontal: 20, paddingVertical: 10 }}>
            <TouchableOpacity onPress={this.openAboutModal}>
              <Icon
                name="info-outline"
                color={colors.gray20}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Info
              onAdd={this.handleAddPress}
              toWatch={list.length}
              watched30={this.watchedInLast30(watched)}
            />
          </View>
          <View style={{ flex: 1, marginVertical: 5, minHeight: 180 }}>
            <Text style={styles.sectionHeading}>In Theaters</Text>
            { loading.similar ?
              <LoadingScreen color={colors.gray20} size={30} backgroundColor={colors.gray90} /> :
              <PosterRoll movies={home.now} handlePress={this.handlePosterPress} />
            }
          </View>
          <View style={{ flex: 1, marginVertical: 5, minHeight: 180 }}>
            <Text style={styles.sectionHeading}>Popular</Text>
            { loading.similar ?
              <LoadingScreen color={colors.gray20} size={30} backgroundColor={colors.gray90} /> :
              <PosterRoll movies={home.popular} handlePress={this.handlePosterPress} />
            }
          </View>
          <View style={{ flex: 1, marginVertical: 5 }}>
            <Clear
              handleWatched={() => this.handleClear(types.WATCHED)}
              handleWatchlist={() => this.handleClear(types.WATCHLIST)}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray90,
    paddingBottom: 10,
  },
  sectionHeading: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: font.title,
  },
})


function mapStateToProps(state) {
  return {
    home: state.home,
    list: state.list,
    loading: state.loading,
    watched: state.watched,
  }
}

export default connect(mapStateToProps, { clear, getPopularAndNowPlaying, setNotListed })(HomeScreen)
