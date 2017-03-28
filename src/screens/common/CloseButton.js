import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors } from '../../theme'

const CloseButton = ({ onBack }) => {
  return (
    <TouchableOpacity onPress={onBack}>
      <Icon
        name="close"
        color={colors.white}
        size={40}
        style={styles} />
    </TouchableOpacity>
  )
}

const styles = {
  marginRight: 10,
  textShadowColor: colors.black,
  textShadowOffset: {width: 2, height: 2},
  textShadowRadius: 20
}

export default CloseButton
