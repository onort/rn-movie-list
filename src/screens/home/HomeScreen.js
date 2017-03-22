import React, { Component, PropTypes } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { clear, fetchList } from '../../actions'
import * as types from '../../actions/types'
import styles from './styles'

class HomeScreen extends Component {

  static propTypes = {
    fetchList: PropTypes.func.isRequired
  }

  static navigationOptions = {
    title: 'Home',
    tabBar: {
      icon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />
    }
  }

  render() {
    return (
      <View style={styles.homeContainer}>
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
      </View>
    )
  }
}

export default connect(null, { clear, fetchList })(HomeScreen)
