export function colorize(rating) {
  if (typeof rating !== 'number') rating = Number(rating)
  if (rating > 7.0) return '#1cad20'
  else if (rating > 6.5) return  '#4aad1c'
  else if (rating > 6.0) return  '#86ad1c'
  else if (rating > 5.5) return '#e0d61d'
  else return '#ad1313'
}