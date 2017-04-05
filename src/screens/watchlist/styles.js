import { StyleSheet } from 'react-native'
import { colors, font, fontSize } from '../../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray90,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: font.roboIt,
    textAlign: 'center',
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
})
