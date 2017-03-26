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
    // zIndex: 1
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    // backgroundColor: colors.white,
    // elevation: 1,
    // zIndex: 9,
    // marginBottom: 40,
    // borderColor: colors.green,
    // borderWidth: 1,
  },
  posterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // zIndex: 9
  },
  poster: {
    width: 100,
    height: 150,
    position: 'absolute',
    top: -80,
    borderRadius: 5,
    // zIndex: 9
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
  sectionHeading: {
    fontSize: fontSize.medium,
    fontFamily: font.title,
    color: colors.black
  },
  actionsContainer: {
    height: 60,
  }
})
