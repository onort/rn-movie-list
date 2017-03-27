import { StyleSheet } from 'react-native'
import { colors, font, fontSize } from '../../../theme'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexGrow: 1,
  },
  
  sectionHeading: {
    fontSize: fontSize.medium,
    fontFamily: font.title,
    color: colors.black
  },
  actionsContainer: {
    height: 60,
  }
})
