import React, { PropTypes } from 'react'
import { Text, View } from 'react-native'

import CastList from '../castList/CastList'


const MovieDetail = ({ children, movie }) => {
  const { title, vote_average } = movie.details
  const { cast,crew } = movie.credits
  // const director = crew && crew.slice(0, 10).filter(person => person.job.toLowerCase() === 'director' )
  // const screenplay = crew && crew.slice(0, 10).filter(person => person.job.toLowerCase() === 'screenplay' )
  
  // const renderDirector = () => director.map(person => <Text key={person.id}>{person.name}</Text>)
  // const renderScreenplay = () => screenplay.map(person => <Text key={person.id}>{person.name}</Text> )

  return (
    <View style={{ flex: 1 }}>
      { movie.details && movie.credits.cast &&
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 20, marginTop: 50 }}>{title}</Text>
          <Text style={{ fontSize: 15 }}>Score: {vote_average}</Text>
          <Text style={{ fontSize: 20, color: 'red' }}>{crew[0].job}: {crew[0].name}</Text>
          <Text style={{ fontSize: 20, color: 'green' }}>{crew[1].job}: {crew[1].name}</Text>
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
