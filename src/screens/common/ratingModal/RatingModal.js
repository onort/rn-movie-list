import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors, font, fontSize } from '../../../theme'

const RatingModal = ({ handleRate, onClose, rated, title, visible }) => {
  const ratings = [1,2,3,4,5,6,7,8,9,10]
  return (
    <Modal
      animationType={'fade'}
      visible={visible}
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <View style={styles.topContainer}>
                <TouchableOpacity onPress={onClose}>
                  <Icon name="close" color={colors.gray50} size={25} style={styles.close} />
                </TouchableOpacity>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Your rating for <Text style={{ fontFamily: font.openSansBold }}>{title}</Text>
                </Text>
              </View>
              <View style={styles.starsContainer}>
                {ratings.map((rating, i) => Star(rating, i, rated, handleRate))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const Star = (rating, i, rated, handleRate) => {
  return (
    <View key={rating} style={styles.star}>
      <TouchableWithoutFeedback onPress={() => handleRate(rating)}>
        <Icon
          name={i + 1 > rated ? 'star-border' : 'star'}
          color={i + 1 > rated ? colors.gray60 : colors.star }
          size={25} />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    paddingBottom: 50,
    width: 320,
    backgroundColor: colors.white,
    elevation: 4,
    borderRadius: 4,
  },
  topContainer: {
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textContainer: {
    padding: 20,
  },
  text: {
    fontSize: fontSize.medium,
    color: colors.gray70,
    fontFamily: font.roboReg,
    textAlign: 'center'
  },
  starsContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    marginRight: 2,
  }
})

export default RatingModal
