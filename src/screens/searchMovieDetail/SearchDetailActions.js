import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors } from '../../theme'

const SearchDetailActions = ({ onAdd, onCancel, onTrailer }) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={onAdd}>
          <View style={styles.actionContainer}>
            <Icon name="add" color={colors.gray70} size={30} />
            <Text style={styles.text}>Add To Watchlist</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.actionContainer, styles.border]}>
        <TouchableOpacity onPress={onTrailer}>
          <View style={styles.actionContainer}>
            <Icon name="play-circle-outline" color={colors.gray70} size={30} />
            <Text style={styles.text}>Watch Trailer</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={onCancel}>
          <View style={styles.actionContainer}>
            <Icon name="close" color={colors.gray70} size={30} />
            <Text style={styles.text}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  container: {
    marginTop: -75,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'center', // no effect
    alignItems: 'center',
    paddingVertical: 10,
  },
  border: {
    borderLeftColor: colors.gray15,
    borderLeftWidth: 1,
    borderRightColor: colors.gray15,
    borderRightWidth: 1,
  },
  text: {
    marginTop: 10,
    paddingHorizontal: 10,
    color: colors.gray60,
    textAlign: 'center',
  }
}

export default SearchDetailActions
