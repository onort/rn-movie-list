import { StyleSheet } from 'react-native'
import { colors, font, fontSize } from '../../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray90,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  sectionHeading: {
    padding: 10,
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: font.title,
  }
})
