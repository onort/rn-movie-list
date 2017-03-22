import { StyleSheet } from 'react-native'
import { colors, fontSize } from '../../theme'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: colors.white
  },
  inputField: {
    color: colors.black,
    fontSize: fontSize.default,
    height: 32,
    padding: 3,
    flex: 1,
  },
  searchButton: {
    padding: 5
  },
  resultsContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  resultsText: {
    fontSize: fontSize.default,
    color: colors.black
  }
})
