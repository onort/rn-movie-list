import React, { Component, PropTypes } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { setSelected } from '../../actions'
import * as types from '../../actions/types'
import { colors, font, fontSize } from '../../theme'

import { PosterRoll } from '../common'
import Info from './components/Info'

class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.handleAddPress = this.handleAddPress.bind(this)
    this.handlePosterPress = this.handlePosterPress.bind(this)
    this.handleWatchlistPress = this.handleWatchlistPress.bind(this)
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

  handlePosterPress(movie) {
    this.props.setSelected(movie)
    this.props.navigation.navigate('HomeMovieDetail')
  }

  handleWatchlistPress() {
    this.props.navigation.navigate('Watchlist')
  }

  handleAddPress() {
    this.props.navigation.navigate('SearchMovie')
  }

  render() {
    const { list, watched } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'flex-end', paddingHorizontal: 40, paddingVertical: 20 }}>
          <TouchableOpacity>
            <Icon
              name="info-outline"
              color="#fff"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Info
            onWatchlist={this.handleWatchlistPress}
            onAdd={this.handleAddPress}
            toWatch={list.length}
            watched={watched.length}
          />
        </View>
        <View style={{ flex: 1, marginVertical: 5 }}>
          <Text style={styles.sectionHeading}>Discover</Text>
          <PosterRoll movies={list} handlePress={this.handlePosterPress} />
        </View>
        <View style={{ flex: 1, marginVertical: 5 }}>
          <Text style={styles.sectionHeading}>In Theaters</Text>
          <PosterRoll movies={watched} handlePress={this.handlePosterPress} />
        </View>
        <Button
          onPress={() => this.props.clear(types.WATCHLIST)}
          title="Clear Movie List"
          color="#61b2a7"
          accessibilityLabel="Clear Movie List"
        />
        <Button
          onPress={() => this.props.clear(types.WATCHED)}
          title="Clear Watched Movies"
          color="#841584"
          accessibilityLabel="Clear Watched Movies"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Trailer')}
          title="Watch A Video"
          color="#bb0000"
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray90,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  homeText: {
    color: colors.black,
    fontSize: fontSize.default,
    fontFamily: font.ubuntu,
  },
  sectionHeading: {
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    padding: 10,
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: font.openSansBold,
  }
})

function mapStateToProps(state) {
  return {
    list: state.list,
    watched: state.watched,
  }
}

export default connect(mapStateToProps, { setSelected })(HomeScreen)
