import { StyleSheet } from 'react-native'
import { colors, font, fontSize } from '../../../theme'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.gray15,
  },
  sectionHeading: {
    marginVertical: 10,
    fontSize: fontSize.medium,
    fontFamily: font.title,
    color: colors.black
  },
  actionsContainer: {
    height: 60,
  }
})
