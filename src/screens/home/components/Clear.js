import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors, font, fontSize } from '../../../theme'

const Clear = ({ handleWatchlist, handleWatched }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleWatchlist}>
        <View style={styles.buttonContainer}>
          <Icon name="list" color={colors.gray15} size={18} />
          <Text style={styles.buttonText}>Clear Watchlist</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleWatched}>
        <View style={styles.buttonContainer}>
          <Icon name="delete" color={colors.gray15} size={18} />
          <Text style={styles.buttonText}>Clear Watched</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.red,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: fontSize.small,
    color: colors.gray15,
    fontFamily: font.default,
    marginLeft: 4,
  }
})

export default Clear
