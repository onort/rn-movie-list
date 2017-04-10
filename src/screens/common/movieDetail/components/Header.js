import React from 'react'
import { Image, Text, View } from 'react-native'
import moment from 'moment'

import { colors, font, fontSize } from '../../../../theme'

const Header = ({ movie }) => {
    const { backdrop_path, poster_path, tagline, title } = movie.details
    const titleFontSize = title && title.length < 50 ? fontSize.large : fontSize.medium
    const taglineFontSize = tagline && tagline.length < 150 ? fontSize.default : fontSize.small
    const backdropSrc =
      backdrop_path ?
        { uri :`http://image.tmdb.org/t/p/w780${backdrop_path}` } :
        require('../../../_assets/noBackdropDetail.png');
    const posterSrc =
      poster_path ?
      { uri: `http://image.tmdb.org/t/p/w154${poster_path}` } :
      require('../../../_assets/noPoster.png');
    const dateData = () => {
      if (movie.watched_on) return <Text style={styles.dateInfo}>Watched on {moment(movie.watched_on).format('DD MMMM YYYY')}</Text>
      else if (movie.date_added) return <Text style={styles.dateInfo}>Added {moment(movie.date_added).fromNow()}</Text>
      else return null
    }
  return (
    <View>
      <Image
        source={backdropSrc}
        style={styles.backdrop}
      />
      {dateData()}
      <View style={styles.header}>
        <View style={styles.posterContainer}>
          <Image
            source={posterSrc}
            style={styles.poster}
          />
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleItem}>
            <Text style={[styles.title, { fontSize: titleFontSize }]}>{title}</Text>
          </View>
          <View style={styles.titleItem}>
            {tagline ? <Text style={[styles.tagline, { fontSize : taglineFontSize }]}>{tagline}</Text> : null}
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = {
  backdrop: {
    height: 200,
    opacity: 0.8,
    backgroundColor: colors.gray90,
    resizeMode: 'cover',
  },
  dateInfo: {
    position: 'absolute',
    top: 20,
    right: 30,
    fontSize: fontSize.xsmall,
    color: colors.white,
    textShadowColor: colors.gray70,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    top: -80,
    justifyContent: 'space-between',
    minHeight: 170,
  },
  posterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  poster: {
    width: 100,
    height: 150,
    position: 'absolute',
    borderRadius: 5,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  titleItem: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: 85,
    paddingBottom: 10,
  },
  title: {
    color: colors.white,
    fontFamily: font.title,
    textShadowColor: colors.gray50,
    textShadowOffset: {width: 1, height: 1},
  },
  tagline: {
    color: colors.gray70,
    fontFamily: font.roboIt,
  },
}

export default Header
