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
    backgroundColor: colors.white,
    elevation: 4
  },
  inputField: {
    color: colors.black,
    fontSize: fontSize.default,
    height: 42,
    padding: 10,
    flex: 1,
    borderWidth: 0,
  },
  searchButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderLeftColor: colors.grey,
    borderLeftWidth: 1,
  },
  resultsContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
  },
  resultsText: {
    fontSize: fontSize.default,
    color: colors.black
  }
})
