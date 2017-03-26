import React, { PropTypes } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import { colors, fontSize } from '../../../theme'
import styles from './styles'

import CastList from './components/CastList'
import Crew from './components/Crew'
import Genres from './components/Genres'
import MovieMeta from './components/MovieMeta'

import ActionSample from './ActionsSample'

const MovieDetail = ({ children, movie }) => {
  const { backdrop_path, genres, overview, poster_path, tagline, title, vote_average } = movie.details
  const { cast,crew } = movie.credits
  const backdropUrl = 'http://image.tmdb.org/t/p/w300/'
  const posterUrl = 'http://image.tmdb.org/t/p/w154/'
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContainer}>
        { movie.details &&
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
          <View>
            { children }
          </View>
          <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
            <View style={{ flex: 1 }}>
              <MovieMeta details={movie.details} />
            </View>
            {crew &&
            <View style={{ flex: 2 }}>
              <Crew crew={crew} />
            </View>
            }
          </View>
          { genres &&
          <View style={{ flex: 1 }}>
            <Genres genres={genres} />
          </View>
          }
          <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            <Text style={styles.sectionHeading}>Summary:</Text>
          </View>
          <View style={styles.overviewContainer}>
            <Text style={styles.overview}>{overview}</Text>
          </View>
          { cast &&
          <View style={{ flex: 1 }}>
            <CastList cast={cast.slice(0, 11)} />
          </View>
          }
        </View>
        }
      </ScrollView>
    </View>
  )
}

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  // children:
}

export default MovieDetail
