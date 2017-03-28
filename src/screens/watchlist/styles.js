import { StyleSheet } from 'react-native'
import { colors, fontSize } from '../../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray90
  },
  text: {
    color: colors.white,
    fontSize: fontSize.medium,
    textAlign: 'center',
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
})
