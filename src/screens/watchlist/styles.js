import { StyleSheet } from 'react-native'
import { colors, fontSize } from '../../theme'

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
    color: colors.black,
    fontSize: fontSize.default,
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
    backgroundColor: colors.white
  },
  movieMeta: {
    flex: 1,
  },
  movieTitle: {
    fontSize: fontSize.default,
  },
  actionsContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionStyle: {
    marginHorizontal: 10
  }
})
