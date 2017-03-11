import React from 'react'
import { TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconButton = ({ name, size, color, onPress, style }) => {
  return (
    <TouchableHighlight onPress={onPress} style={style}>
      <Icon
        name={name}
        size={size}
        color={color}
      />
    </TouchableHighlight>
  )
}

IconButton.defaultProps = {
  style: {},
  onPress: () => {}
}

export default IconButton
