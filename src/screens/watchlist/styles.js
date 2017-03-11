import { StyleSheet } from 'react-native'
import { Colors } from '../common'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Colors.black,
    fontSize: 20,
  },
  listItemContainer: {
    marginVertical: 5
  },
  movieMeta: {
    flex: 1,
  },
  movieImage: {
    width: 92,
    height: 138,
    borderRadius: 5
  }
})
