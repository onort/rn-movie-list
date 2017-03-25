import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors } from '../../../theme'

const ActionsSample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <TouchableOpacity>
          <View style={styles.actionContainer}>
            <Icon name="done" color={colors.gray50} size={30} />
            <Text style={styles.text}>Mark Watched</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.actionContainer, styles.border]}>
        <TouchableOpacity>
          <View style={styles.actionContainer}>
            <Icon name="play-circle-outline" color={colors.gray50} size={30} />
            <Text style={styles.text}>Watch Trailer</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity>
          <View style={styles.actionContainer}>
            <Icon name="delete" color={colors.gray50} size={30} />
            <Text style={styles.text}>Remove</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    // elevation: 2,
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    // marginHorizontal: 10,
    // paddingVertical: 20,
    // elevation: 2,
    // borderRightColor: 'red',
    // borderWidth: 1,
    // backgroundColor: 'red',
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
  }
}

export default ActionsSample
