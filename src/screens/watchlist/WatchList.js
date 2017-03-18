import React, { Component, PropTypes } from 'react'
import { ListView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'

import styles from './styles'
import { 
  discardMovie,
  fetchList,
  markWatched,
  setSelected
} from '../../actions'

import ItemActions from './components/ItemActions'
import { IconButton, ListItem } from '../common'

class WatchList extends Component {

  constructor(props) {
    super(props)
    this.handleItemPress = this.handleItemPress.bind(this)
    this.onDiscard = this.onDiscard.bind(this)
    this.onWatched = this.onWatched.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  static navigationOptions = {
    title: () => 'Your Watch List',
    header: ({ navigate }) => ({
      right: <IconButton name="add" size={25} color="#333" onPress={() => navigate('SearchMovie')} />,
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

  handleItemPress(movie) {
    this.props.setSelected(movie)
    this.props.navigation.navigate('ListMovieDetail', { title: movie.details.title })
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
        <ItemActions
          onDiscard={() => this.onDiscard(movie)}
          onWatched={() => this.onWatched(movie)}
        />
      </ListItem>
    )
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

export default connect(mapStateToProps, { discardMovie, fetchList, markWatched, setSelected })(WatchList)
