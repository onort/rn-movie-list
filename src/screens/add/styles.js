import { StyleSheet } from 'react-native'
import { Colors } from '../common'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: Colors.white
  },
  inputField: {
    color: Colors.black,
    fontSize: 20,
    height: 32,
    padding: 3,
    flex: 1,
  },
  searchButton: {
    padding: 5
  },
  resultsContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  resultsText: {
    fontSize: 20,
    color: Colors.black
  }
})
