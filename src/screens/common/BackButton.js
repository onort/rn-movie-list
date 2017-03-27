import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors } from '../../theme'

const BackButton = ({ onBack }) => {
  return (
    <TouchableOpacity onPress={onBack}>
      <Icon
        name="keyboard-arrow-left"
        color={colors.white}
        size={40}
        style={styles} />
    </TouchableOpacity>
  )
}

const styles = {
  marginLeft: 10,
  textShadowColor: colors.black,
  textShadowOffset: {width: 2, height: 2},
  textShadowRadius: 20
}

export default BackButton
