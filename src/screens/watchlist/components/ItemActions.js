import React from 'react'
import { View } from 'react-native'

import { colors } from '../../../theme'
import styles from '../styles'

import { IconButton } from '../../common'

const ItemActions = ({ onDiscard, onWatched }) => {
  const logPress = () => console.log('Pressed Button')
  return (
    <View style={styles.actionsContainer}>
      <IconButton
        name="done"
        size={25}
        color={colors.black}
        onPress={onWatched}
        style={styles.actionStyle}
      />
      <IconButton
        name="star-border"
        size={25}
        color={colors.black}
        onPress={logPress}
        style={styles.actionStyle} 
      />
      <IconButton
        name="delete"
        size={25}
        color={colors.black}
        onPress={onDiscard}
        style={styles.actionStyle}
      />
      <View>
        <IconButton
          name="play-arrow"
          size={25}
          color={colors.black}
          onPress={logPress}
          style={styles.actionStyle} />
      </View>
    </View>
  )
}

export default ItemActions
