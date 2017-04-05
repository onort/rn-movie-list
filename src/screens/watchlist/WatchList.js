import React, { Component, PropTypes } from 'react'
import { ListView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { 
  discardMovie,
  fetchList,
  markWatched,
  setSelected
} from '../../actions'
import styles from './styles'
import { routeNames } from '../../constants'

import { ListItem } from '../common'
import ItemInfo from './components/ItemInfo'

class WatchList extends Component {

  constructor(props) {
    super(props)
    this.handleItemPress = this.handleItemPress.bind(this)
    this.onDiscard = this.onDiscard.bind(this)
    this.onWatched = this.onWatched.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  static navigationOptions = {
    header: () => ({
      visible: false
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

  handleItemPress(movie) {
    this.props.setSelected(movie)
    this.props.navigation.navigate(routeNames.watchlist.detail)
  }

  onDiscard(movie) {
    this.props.discardMovie(movie)
  }

  onWatched(movie) {
    this.props.markWatched(movie)
  }

  renderRow(movie) {
    return (
      <ListItem movie={movie.details} handlePress={() => this.handleItemPress(movie)}>
        <ItemInfo movie={movie} handlePress={() => this.handleItemPress(movie)} />
      </ListItem>
    )
  }

  render() {
    if (!this.props.list.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>You have no movie in your watchlist.</Text>
        </View>
      )
    }
    else if (this.props.list.length) {
      return (
        <View style={styles.container}>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </View>
      )
    } else return null
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, { discardMovie, fetchList, markWatched, setSelected })(WatchList)
