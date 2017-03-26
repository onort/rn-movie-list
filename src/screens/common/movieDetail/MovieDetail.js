import React, { PropTypes } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import { colors, fontSize } from '../../../theme'
import styles from './styles'

import CastList from './components/CastList'
import Crew from './components/Crew'
import Genres from './components/Genres'
import MovieMeta from './components/MovieMeta'

const MovieDetail = ({ children, movie }) => {
  const { backdrop_path, genres, overview, poster_path, tagline, title } = movie.details
  const { cast,crew } = movie.credits
  const backdropUrl =
    backdrop_path ?
      'http://image.tmdb.org/t/p/w300' + backdrop_path :
      'http://placehold.it/300x169';
  const posterUrl = poster_path ? 'http://image.tmdb.org/t/p/w92' + poster_path : 'http://placehold.it/154x231'
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContainer}>
        { movie.details &&
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: backdropUrl }}
            style={styles.backdrop}
          />
          <View style={styles.header}>
            <View style={styles.posterContainer}>
              <Image
                source={{ uri: posterUrl }}
                style={styles.poster}
              />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              {tagline ? <Text style={styles.tagline}>{tagline}</Text> : null}
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
            { overview ?
              <Text style={styles.overview}>{overview}</Text> :
              <Text style={styles.overview}>There is no summary for this movie. :(</Text>
            }
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
