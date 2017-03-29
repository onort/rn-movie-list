import { StyleSheet} from 'react-native'


export default StyleSheet.create({
  root: {
    flex: 1,
    height: 120,
    marginBottom: 5,
  },
  backdrop: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
    opacity: 1,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 1,
    elevation: 2,
    backgroundColor: 'rgba(0, 0, 0, .7)'
  },
  posterContainer: {
    flex: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    marginTop: 8,
    width: 60,
    height: 90,
    borderRadius: 3,
  },
  infoContainer: {
    flex: 3,
    height: 120
  }
})
