import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  fetchWatched,
  getMovieDetails,
  resetInList,
  setInList,
  setNotListed,
  saveWatched
} from '../../actions'
import Actions from './WatchedMovieActions'
import { colors, font, fontSize } from '../../theme'
import { routeNames } from '../../constants'

import { BackButton, LoadingScreen, MovieDetail, RatingModal, ShareModal } from '../common'

class WatchedMovieDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ratingModalOpen: false,
      rated: -1,
      socialModalOpen: false,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleRateModalClose = this.handleRateModalClose.bind(this)
    this.handleRate = this.handleRate.bind(this)
    this.handleShare = this.handleShare.bind(this)
    this.handleShareCancel = this.handleShareCancel.bind(this)
    this.handleSimilarPress = this.handleSimilarPress.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.openRateModal = this.openRateModal.bind(this)
    this.openSocialModal = this.openSocialModal.bind(this)
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
    if (this.props.inList.user_rating) {
      this.setState({ rated: this.props.inList.user_rating })
    }
  }

  componentWillUnmount() {
    this.props.resetInList()
  }

  onDelete() {
    const title = 'Removing Movie'
    const message = `Are you sure you want to remove the movie "${this.props.inList.details.title}" from your watched movies?`
    const buttons = [ { text: 'Remove', onPress: this.handleDelete }, { text: 'Cancel' }]
    Alert.alert(title, message, buttons)
  }

  async handleDelete() {
    const { navigation, inList, watched } = this.props
    const newWatched = watched.filter(movie => movie.id !== inList.id)
    await this.props.saveWatched(newWatched)
      .then(() => {
        this.props.fetchWatched()
        navigation.goBack()
      })
      .catch(err => console.error('Error on handleDelete / WatchedMovieDetail component', err))
    // Toastr
  }

  openRateModal() {
    this.setState({ ratingModalOpen: true })
  }

  async handleRate(rating) {
    this.setState({ rated: rating })
    const { inList: ratedMovie, watched } = this.props
    ratedMovie.user_rating = rating
    const updatedWatched = watched.map(movie => {
      if (movie.id === ratedMovie.id) return ratedMovie
      return movie
    })
    await this.props.saveWatched(updatedWatched)
      .then(() => this.props.fetchWatched())
      .catch(err => console.error('Error on handleRate', err))
    setTimeout(this.handleRateModalClose, 2000)
  }

  handleRateModalClose() {
    this.setState({ ratingModalOpen: false })
  }

  openSocialModal() {
    this.setState({ socialModalOpen: true })
  }

  handleShareCancel() {
    this.setState({ socialModalOpen: false })
  }

  handleShare() {
    this.openSocialModal()
  }

  handleSimilarPress(movie) {
    this.props.setNotListed(movie)
    this.props.getMovieDetails(movie.id)
    this.props.navigation.navigate(routeNames.watched.similar)
  }

  render() {
    const movie = this.props.inList
    const { rated, ratingModalOpen, socialModalOpen } = this.state
    return (
    <View style={{ flex: 1 }}>
      {this.props.loading.screen ?
        <LoadingScreen color={colors.gray20} size={50} backgroundColor={colors.gray90} /> :
        <MovieDetail movie={movie} handleSimilarPress={this.handleSimilarPress}>
          <Actions
            handleDelete={this.onDelete}
            handleRate={this.openRateModal}
            handleShare={this.handleShare}
            rated={rated}
          />
          <View style={styles.timeContainer}>
            <Icon name="done-all" color={colors.gray70} size={25} style={styles.icon} />
            <Text style={styles.timeText}>{moment(movie.watched_on).format('DD MMMM YYYY')}</Text>
          </View>
          <RatingModal
            handleRate={this.handleRate}
            rated={rated}
            onClose={this.handleRateModalClose}
            title={movie.details.title}
            visible={ratingModalOpen}
          />
          <ShareModal
            visible={socialModalOpen}
            cancelShare={this.handleShareCancel}
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
    fontFamily: font.roboReg,
  }
}

function mapStateToProps(state) {
  return {
    inList: state.inList,
    loading: state.loading,
    watched: state.watched
  }
}

export default connect(mapStateToProps, {
  fetchWatched,
  getMovieDetails,
  resetInList,
  saveWatched,
  setInList,
  setNotListed
})(WatchedMovieDetail)
