import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import { Colors, IconButton } from '../common'

const ItemActions = () => {
  const logPress = (e) => console.log('Pressed Button', e)
  return (
    <View style={styles.actionsContainer}>
      <IconButton
        name="done"
        size={25}
        color={Colors.black}
        onPress={logPress}
        style={styles.actionStyle}
      />
      <IconButton
        name="star-border"
        size={25}
        color={Colors.black}
        onPress={logPress}
        style={styles.actionStyle} 
      />
      <IconButton
        name="delete"
        size={25}
        color={Colors.black}
        onPress={logPress}
        style={styles.actionStyle}
      />
      <View>
        <IconButton
          name="play-arrow"
          size={25}
          color={Colors.black}
          onPress={logPress}
          style={styles.actionStyle} />
      </View>
    </View>
  )
}

export default ItemActions
