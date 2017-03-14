import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { resetSelected } from '../../actions'

import styles from './styles'

class MovieDetail extends Component {

  static navigationOptions = {
    title: 'Movies Detail',
  }

  componentWillUnmount() {
    this.props.resetSelected()
  }

  render() {
    const { title } = this.props.selectedMovie
    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps, { resetSelected })(MovieDetail)
