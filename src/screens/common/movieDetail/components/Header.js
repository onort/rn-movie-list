import React from 'react'
import { Image, Text, View } from 'react-native'

import { colors, font, fontSize } from '../../../../theme'

const Header = ({ details }) => {
    const { backdrop_path, poster_path, tagline, title } = details
    const backdropSrc =
      backdrop_path ?
        { uri :`http://image.tmdb.org/t/p/w780${backdrop_path}` } :
        require('../../../_assets/noBackdropDetail.png');
    const posterSrc =
      poster_path ?
      { uri: `http://image.tmdb.org/t/p/w154${poster_path}` } :
      require('../../../_assets/noPoster.png');
  return (
    <View>
      <Image
        source={backdropSrc}
        style={styles.backdrop}
      />
      <View style={styles.header}>
        <View style={styles.posterContainer}>
          <Image
            source={posterSrc}
            style={styles.poster}
          />
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleItem}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.titleItem}>
            {tagline ? <Text style={styles.tagline}>{tagline}</Text> : null}
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
  },
  title: {
    fontSize: fontSize.large,
    color: colors.white,
    fontFamily: font.title,
    textShadowColor: colors.gray50,
    textShadowOffset: {width: 1, height: 1},
  },
  tagline: {
    fontSize: fontSize.default,
    color: colors.gray70,
    fontFamily: font.roboIt,
  },
}

export default Header
