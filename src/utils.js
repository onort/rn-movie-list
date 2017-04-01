export function colorize(rating) {
  if (typeof rating !== 'number') rating = Number(rating)
  if (rating > 7.0) return '#1cad20'
  else if (rating >= 6.5) return  '#4aad1c'
  else if (rating >= 6.0) return  '#86ad1c'
  else if (rating >= 5.5) return '#c9691a'
  else return '#ad1313'
}

export function noDuplicateMovie(list, compare) {
  const idsInList = compare.map(movie => movie.id)
  const noDuplicates = list.filter(movie => !idsInList.includes(movie.id))
  return noDuplicates
}

import { routeNames} from './constants'

export function resetRouteName(screen) {
  // Needed to get proper screen name for resetAction in SearchMovieDetail
  // Different resetRoutes for different DetailScreens
  if (screen === routeNames.search.detail)  return routeNames.search.root
  else if (screen === routeNames.home.detail) return routeNames.home.root
  else if (screen === routeNames.watchlist.similar) return routeNames.watchlist.root
  else if (screen === routeNames.watched.similar) return routeNames.watched.root
}
