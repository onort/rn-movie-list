import React, { Component, PropTypes } from 'react'
import { Alert, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View, Button } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { clear, getPopularAndNowPlaying, setNotListed } from '../../actions'
import * as types from '../../actions/types'
import { colors, font, fontSize } from '../../theme'
import { routeNames } from '../../constants'
import styles from './styles'

import { LoadingScreen, PosterRoll } from '../common'
import Info from './components/Info'

class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.handleAddPress = this.handleAddPress.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handlePosterPress = this.handlePosterPress.bind(this)
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

  handlePosterPress(movie) {
    this.props.setNotListed(movie)
    this.props.navigation.navigate(routeNames.home.detail)
  }

  handleAddPress() {
    this.props.navigation.navigate(routeNames.search.root)
  }

  handleClear(list) {
    if (list === types.WATCHED || list === types.WATCHLIST) {
      // check if there movies in list?
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

  testToastr() {
    console.log('Toast says hello')
    ToastAndroid.showWithGravity('Watchlist cleared', ToastAndroid.LONG, ToastAndroid.TOP)
  }

  render() {
    const { home, list, loading, watched } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'flex-end', paddingHorizontal: 20, paddingVertical: 10 }}>
          <TouchableOpacity>
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
            watched={watched.length}
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
        <Button
          onPress={() => this.handleClear(types.WATCHLIST)}
          title="Clear Movie List"
          color="#61b2a7"
          accessibilityLabel="Clear Movie List"
        />
        <Button
          onPress={() => this.handleClear(types.WATCHED)}
          title="Clear Watched Movies"
          color="#841584"
          accessibilityLabel="Clear Watched Movies"
        />
        <Button
          onPress={this.testToastr}
          title="testToastr"
          color="#e5621b"
        />
      </ScrollView>
    )
  }
}


function mapStateToProps(state) {
  return {
    home: state.home,
    list: state.list,
    loading: state.loading,
    watched: state.watched,
  }
}

export default connect(mapStateToProps, { clear, getPopularAndNowPlaying, setNotListed })(HomeScreen)
