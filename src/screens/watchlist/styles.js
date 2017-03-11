import { StyleSheet } from 'react-native'
import { Colors } from '../common'

export default StyleSheet.create({
  headerStyle: {
    paddingHorizontal: 20
  },
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
    margin: 5,
    flexDirection: 'row'
  },
  movieImage: {
    width: 92,
    height: 138,
    borderRadius: 5,
  },
  metaContainer: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.white
  },
  movieMeta: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
  },
  actionsContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionStyle: {
    marginHorizontal: 10
  }
})
