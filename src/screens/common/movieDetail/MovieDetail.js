import React, { PropTypes } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import styles from './styles'

import { CastList, Crew, Genres, Header, MovieMeta, Overview } from './components'

const MovieDetail = ({ children, movie }) => {
  const { backdrop_path, genres, overview, poster_path, tagline, title } = movie.details
  const { cast,crew } = movie.credits

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContainer}>
        { movie.details &&
        <View style={{ flex: 1 }}>
          <Header details={movie.details} />
          <View>
            { children }
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
            <View style={{ flex: 1 }}>
              <MovieMeta details={movie.details} />
            </View>
            <View style={{ flex: 2 }}>
              <Overview overview={overview} />
            </View>
          </View>
          <Genres genres={genres} />
          <Crew crew={crew} />
          { cast &&
            <CastList cast={cast.slice(0, 11)} />
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

/*{crew &&
            <View style={{ flex: 2 }}>
              <Crew crew={crew} />
            </View>
            }*/
