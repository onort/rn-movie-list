import { StyleSheet} from 'react-native'


export default StyleSheet.create({
  root: {
    flex: 1,
    height: 140, // lower to 120
    marginTop: 5,
  },
  backdrop: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
    opacity: 0.8,
    backgroundColor: 'transparent',
    position: 'relative'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 1,
  },
  posterContainer: {
    flex: 2,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    marginTop: 8,
    width: 70,
    height: 106,
    borderRadius: 3,
  },
  infoContainer: {
    flex: 5,
    height: 140
  }
})
