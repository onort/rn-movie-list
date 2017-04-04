import { StyleSheet } from 'react-native'
import { colors, font, fontSize } from '../../../theme'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.gray15,
    paddingBottom: 20,
  },
  sectionHeading: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: fontSize.medium,
    fontFamily: font.title,
    color: colors.gray70,
  },
  actionsContainer: {
    height: 60,
  }
})
