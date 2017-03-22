import React, { PropTypes } from 'react'
import { Text, View } from 'react-native'

import { colors, fontSize } from '../../../theme'

import CastList from '../castList/CastList'

const MovieDetail = ({ children, movie }) => {
  const { overview, title, vote_average } = movie.details
  const { cast,crew } = movie.credits

  return (
    <View style={{ flex: 1 }}>
      { movie.details && movie.credits.cast &&
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: fontSize.large, marginTop: 50 }}>{title}</Text>
          <Text style={{ fontSize: fontSize.default }}>Score: {vote_average}</Text>
          <Text style={{ fontSize: fontSize.default, color: 'red' }}>{crew[0].job}: {crew[0].name}</Text>
          <Text style={{ fontSize: fontSize.default, color: 'green' }}>{crew[1].job}: {crew[1].name}</Text>
          <Text style={{ fontSize: fontSize.default, color:  colors.black }}>{overview}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <CastList cast={cast.slice(0, 11)} />
        </View>
        <View style={{ flex: 1 }}>
          {children}
        </View>
      </View>
      }
    </View>
  )
}

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  // children:
}

export default MovieDetail
