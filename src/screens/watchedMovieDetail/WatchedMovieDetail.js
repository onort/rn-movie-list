import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { fetchWatched, resetSelected, saveWatched } from '../../actions'
import Actions from './WatchedMovieActions'
import { colors, fontSize } from '../../theme'

import { BackButton, LoadingScreen, MovieDetail, RatingModal } from '../common'

class WatchedMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      rated: -1,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleRate = this.handleRate.bind(this)
    this.handleShare = this.handleShare.bind(this)
    this.openRateModal = this.openRateModal.bind(this)
  }

  static navigationOptions = {
    header: ({ goBack }) => ({
      style: { backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, right: 0, },
      left: <BackButton onBack={() => goBack()} />
    }),
    tabBar: {
      visible: false,
    }
  }

  componentWillMount() {
    if (this.props.selectedMovie.user_rating) {
      this.setState({ rated: this.props.selectedMovie.user_rating })
    }
  }

  componentWillUnmount() {
    this.props.resetSelected()
  }

  async handleDelete() {
    console.log('Deleting movie')
    // Confirm
    const { navigation, selectedMovie, watched } = this.props
    const newWatched = watched.filter(movie => movie.id !== selectedMovie.id)
    await this.props.saveWatched(newWatched)
      .then(() => {
        this.props.fetchWatched()
        navigation.goBack()
      })
      .catch(err => console.error('Error on handleDelete / WatchedMovieDetail component', err))
    // Toastr
  }

  openRateModal() {
    this.setState({ modalVisible: true })
  }

  async handleRate(rating) {
    this.setState({ rated: rating })
    const { selectedMovie: ratedMovie, watched } = this.props
    ratedMovie.user_rating = rating
    const updatedWatched = watched.map(movie => {
      if (movie.id === ratedMovie.id) return ratedMovie
      return movie
    })
    await this.props.saveWatched(updatedWatched)
      .then(() => this.props.fetchWatched())
      .catch(err => console.error('Error on handleRate', err))
    setTimeout(this.handleModalClose, 2000)
  }

  handleShare(movie) {
    console.log('Share clicked!', movie)
  }

  handleModalClose() {
    this.setState({ modalVisible: false })
  }

  render() {
    const movie = this.props.selectedMovie
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading ?
        <LoadingScreen /> :
        <MovieDetail movie={movie}>
          <Actions
            handleDelete={this.handleDelete}
            handleRate={this.openRateModal}
            handleShare={() => this.handleShare(movie)}
            rated={this.state.rated}
          />
          <View style={styles.timeContainer}>
            <Icon name="done-all" color={colors.gray70} size={25} style={styles.icon} />
            <Text style={styles.timeText}>{moment(movie.watched_on).format('DD MMMM YYYY')}</Text>
          </View>
          <RatingModal
            handleRate={this.handleRate}
            rated={this.state.rated}
            onClose={this.handleModalClose}
            title={movie.details.title}
            visible={this.state.modalVisible}
          />
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
    loading: state.loading,
    selectedMovie: state.selectedMovie,
    watched: state.watched
  }
}

export default connect(mapStateToProps, { fetchWatched, resetSelected, saveWatched })(WatchedMovieDetail)
