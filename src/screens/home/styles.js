import { StyleSheet } from 'react-native'
import { colors, fontSize} from '../../theme'

export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeText: {
    color: colors.black,
    fontSize: fontSize.default,
  }
})
