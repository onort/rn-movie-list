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

export function resetRouteName(screen) {
  // Needed to get proper screen name for resetAction in SearchMovieDetail
  // Different resetRoutes for different DetailScreens
  if (screen === 'SearchMovieDetail')  return 'SearchMovie'
  else if (screen === 'HomeMovieDetail') return 'Home'
  else if (screen === 'WatchlistSimilarMovieDetail') return 'Watchlist'
  else if (screen === 'WatchedSimilarMovieDetail') return 'Watched'
}
