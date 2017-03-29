import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { fetchWatched, fetchList, getMovieDetails, resetSelected, saveList, saveWatched } from '../../actions'
import Actions from './WatchedMovieActions'
import { colors, fontSize } from '../../theme'

import { BackButton, LoadingScreen, MovieDetail } from '../common'

class WatchedMovieDetail extends Component {

  static navigationOptions = {
    header: ({ goBack }) => ({
      style: { backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, right: 0, },
      left: <BackButton onBack={() => goBack()} />
    }),
    tabBar: {
      visible: false,
    }
  }

  componentWillUnmount() {
    this.props.resetSelected()
  }

  render() {
    const movie = this.props.selectedMovie
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={movie}>
          <Actions />
          <View style={styles.timeContainer}>
            <Icon name="done-all" color={colors.gray70} size={25} style={styles.icon} />
            <Text style={styles.timeText}>{moment(movie.watched_on).format('DD MMMM YYYY')}</Text>
          </View>
        </MovieDetail>
      }
    </View>
    )
  }
}

const styles = {
  timeContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  icon: {

  },
  timeText: {
    marginLeft: 10,
    color: colors.gray70,
    fontSize: fontSize.default,
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
    loading: state.loading,
    selectedMovie: state.selectedMovie,
    watched: state.watched
  }
}

export default connect(mapStateToProps, { fetchList, fetchWatched, getMovieDetails, resetSelected, saveList, saveWatched })(WatchedMovieDetail)
