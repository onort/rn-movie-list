import React, { PropTypes } from 'react'
import { ScrollView, Text, View } from 'react-native'

import styles from './styles'

import { PosterRoll } from '../../common'
import { CastList, Crew, Genres, Header, MovieMeta, Overview } from './components'

const MovieDetail = ({ children, handleSimilarPress, movie }) => {
  const { genres, overview } = movie.details
  const { cast,crew } = movie.credits

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        { movie.details &&
        <View style={{ flex: 1 }}>
          <Header movie={movie} />
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
          { crew.length ?
            <Crew crew={crew} /> :
            null
          }
          { cast.length ?
            <CastList cast={cast.slice(0, 11)} /> :
            null
          }
          { movie.similar && movie.similar.length ?
            <View style={{ flex: 1, marginVertical: 10 }}>
              <Text style={styles.sectionHeading}>Similar Movies</Text>
              <PosterRoll movies={movie.similar} handlePress={handleSimilarPress} />
            </View> :
            null
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
