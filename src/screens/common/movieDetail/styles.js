import { StyleSheet } from 'react-native'
import { colors, font, fontSize } from '../../../theme'

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexGrow: 1,
  },
  backdrop: {
    height: 200,
    opacity: 0.8,
    backgroundColor: colors.black,
    resizeMode: 'cover',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    // marginBottom: 40,
    // borderColor: colors.green,
    // borderWidth: 1,
  },
  posterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  poster: {
    width: 100,
    height: 150,
    position: 'absolute',
    top: -80,
    borderRadius: 5,
  },
  titleContainer: {
    flex: 2,
  },
  title: {
    fontSize: fontSize.large,
    color: colors.black,
    fontFamily: font.title,
  },
  tagline: {
    fontSize: fontSize.default,
    color: colors.grey,
  },
  overviewContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  overview: {
    fontSize: fontSize.default,
    color: colors.black,
    fontFamily: font.montReg,
    lineHeight: 28,
  },
  actionsContainer: {
    height: 60,
  }
})
