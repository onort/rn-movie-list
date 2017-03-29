import React, { Component } from 'react'
import { ListView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { fetchWatched, setSelected } from '../../actions'
import { colors, fontSize } from '../../theme'

import { ListItem } from '../common'
import ItemInfo from './components/ItemInfo'

class Watched extends Component {

  constructor(props) {
    super(props)
    this.handleItemPress = this.handleItemPress.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  static navigationOptions = {
    header: () => ({
      visible: false
    }),
    tabBar: {
      icon: ({ tintColor }) => <Icon name="done-all" size={25} color={tintColor} />
    }
  }

  componentWillMount() {
    this.props.fetchWatched()
    this.createDataSource(this.props.watched)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.watched)
  }

  handleItemPress(movie) {
    console.log('Pressed handleItemPress')
    this.props.setSelected(movie)
    this.props.navigation.navigate('WatchedMovieDetail')
  }

  handlePres(movie) {
    console.log(movie)
  }

  createDataSource(watched) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(watched)
  }

  renderRow(movie) {
    return (
      <ListItem movie={movie.details} handlePress={() => this.handleItemPress(movie)}>
        <ItemInfo movie={movie} handlePress={() => this.handleItemPress(movie)} />
      </ListItem>
    )
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

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.gray90,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.medium,
    textAlign: 'center',
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
}

function mapStateToProps(state) {
  return {
    watched: state.watched
  }
}

export default connect(mapStateToProps, { fetchWatched, setSelected })(Watched)
