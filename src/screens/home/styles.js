import { StyleSheet } from 'react-native'
import { colors, font, fontSize} from '../../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray90,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  homeText: {
    color: colors.black,
    fontSize: fontSize.default,
    fontFamily: font.ubuntu,
  },
  sectionHeading: {
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    padding: 10,
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: font.openSansBold,
  }
})
