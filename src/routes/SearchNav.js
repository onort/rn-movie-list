import { StackNavigator } from 'react-navigation'

import { SearchMovie, SearchMovieDetail, Trailer } from '../screens'

export default StackNavigator(
  {
    SearchMovie: {
      screen: SearchMovie
    },
    SearchMovieDetail: {
      screen: SearchMovieDetail
    },
    Trailer: {
      screen: Trailer
    }
  },
  {

  }
)
