import { StyleSheet } from 'react-native'
import { colors, font, fontSize } from '../../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray80,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: colors.gray05,
    elevation: 4
  },
  inputField: {
    color: colors.gray70,
    fontSize: fontSize.default,
    fontFamily: font.roboReg,
    height: 42,
    padding: 10,
    flex: 1,
    borderWidth: 0,
  },
  searchButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderLeftColor: colors.gray50,
    borderLeftWidth: 1,
    backgroundColor: colors.gray70,
  },
  resultsContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
  },
  resultsText: {
    color: colors.gray10,
    fontSize: fontSize.default,
    fontFamily: font.roboReg,
    padding: 20,
    textAlign: 'center',
  }
})
