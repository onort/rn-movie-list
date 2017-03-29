import React, { Component, PropTypes } from 'react'
import { ScrollView, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { setSelected } from '../../actions'
import * as types from '../../actions/types'
import styles from './styles'

import { PosterRoll } from '../common'
import Info from './components/Info'

class HomeScreen extends Component {

  constructor(props) {
    super(props)
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

  handlePosterPress(movie) {
    this.props.setSelected(movie)
    this.props.navigation.navigate('HomeMovieDetail')
    console.log('Poster clicked!', movie)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'flex-end', paddingHorizontal: 40, paddingVertical: 20 }}>
          <Icon
            name="info-outline"
            color="#fff"
            size={30}
          />
        </View>
        <View>
          <Info />
        </View>
        <View style={{ flex: 1, marginVertical: 5 }}>
          <Text style={styles.sectionHeading}>Discover</Text>
          <PosterRoll movies={this.props.list} handlePress={this.handlePosterPress} />
        </View>
        <View style={{ flex: 1, marginVertical: 5 }}>
          <Text style={styles.sectionHeading}>In Theaters</Text>
          <PosterRoll movies={this.props.watched} handlePress={this.handlePosterPress} />
        </View>
        <Text style={styles.homeText}>This is HomeScreen</Text>
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

function mapStateToProps(state) {
  return {
    list: state.list,
    watched: state.watched,
  }
}

export default connect(mapStateToProps, { setSelected })(HomeScreen)
