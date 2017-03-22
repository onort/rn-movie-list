import React, { Component } from 'react'
import { ListView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'

import { fetchWatched } from '../../actions'
import styles from './styles'

import { ListItem } from '../common'

class Watched extends Component {

  static navigationOptions = {
    title: 'Watched Movies',
    tabBar: {
      icon: ({ tintColor }) => <Icon name="playlist-add-check" size={25} color={tintColor} />
    }
  }

  componentWillMount() {
    this.props.fetchWatched()
    this.createDataSource(this.props.watched)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.watched)
  }

  createDataSource(watched) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(watched)
  }

  renderRow(movie) {
    return <ListItem movie={movie.details} />
  }

  render() {
    if (!this.props.watched.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>You haven't marked any movie watched.</Text>
        </View>
      )
    }
    else if (this.props.watched.length) {
      return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      )
    } else return null
  }
}

function mapStateToProps(state) {
  return {
    watched: state.watched
  }
}

export default connect(mapStateToProps, { fetchWatched })(Watched)
