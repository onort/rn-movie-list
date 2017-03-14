import React, { Component, PropTypes } from 'react'
import { ListView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'

import styles from './styles'
import { fetchList } from '../../actions'

import WatchListItem from './WatchListItem'
import { IconButton } from '../common'

class WatchList extends Component {

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
  }

  static navigationOptions = {
    title: () => 'Your Watch List',
    header: ({ navigate }) => ({
      right: <IconButton name="add" size={25} color="#333" onPress={() => navigate('AddMovie')} />,
      style: styles.headerStyle
    }),
    tabBar: {
      icon: ({ tintColor }) => <Icon name="format-list-bulleted" size={25} color={tintColor} />
    }
  }

  static propTypes = {
    list: PropTypes.array,
    fetchList: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchList()
    this.createDataSource(this.props.list)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.list)
  }

  createDataSource(movies) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(movies)
  }

  renderRow(movie) {
    const { navigate } = this.props.navigation
    return <WatchListItem movie={movie} navigate={navigate} />
  }

  render() {
    if (!this.props.list.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>No movies to render</Text>
        </View>
      )
    }
    else if (this.props.list.length) {
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
    list: state.list
  }
}

export default connect(mapStateToProps, { fetchList })(WatchList)
