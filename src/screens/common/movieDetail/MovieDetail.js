import React, { PropTypes } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import { colors, fontSize } from '../../../theme'
import styles from './styles'

import CastList from '../castList/CastList'

const MovieDetail = ({ children, movie }) => {
  const { backdrop_path, overview, poster_path, tagline, title, vote_average } = movie.details
  const { cast,crew } = movie.credits
  const backdropUrl = 'http://image.tmdb.org/t/p/w300/'
  const posterUrl = 'http://image.tmdb.org/t/p/w154/'
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContainer}>
        { movie.details && movie.credits.cast &&
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: backdropUrl + backdrop_path}}
            style={styles.backdrop}
          />
          <View style={styles.header}>
            <View style={styles.posterContainer}>
              <Image
                source={{ uri: posterUrl + poster_path }}
                style={styles.poster}
              />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              {tagline && <Text style={styles.tagline}>{tagline}</Text>}
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <Text style={{ fontSize: fontSize.default }}>Score: {vote_average}</Text>
            <Text style={{ fontSize: fontSize.default, color: 'red' }}>{crew[0].job}: {crew[0].name}</Text>
            <Text style={{ fontSize: fontSize.default, color: 'green' }}>{crew[1].job}: {crew[1].name}</Text>
          </View>
          <View style={styles.overviewContainer}>
            <Text style={styles.overview}>{overview}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <CastList cast={cast.slice(0, 11)} />
          </View>
        </View>
        }
      </ScrollView>
      <View style={styles.actionsContainer}>
        {children}
      </View>
    </View>
  )
}

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  // children:
}

export default MovieDetail
