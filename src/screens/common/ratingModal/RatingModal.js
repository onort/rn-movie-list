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
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <View style={styles.topContainer}>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" color={colors.gray70} size={25} style={styles.close} />
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
      </View>
    </Modal>
  )
}

const Star = (rating, i, rated, handleRate) => {
  return (
    <View key={rating} style={styles.star}>
      <TouchableWithoutFeedback onPress={() => handleRate(rating)}>
        <Icon name={i + 1 > rated ? 'star-border' : 'star'} color={colors.gray60} size={25} />
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
    paddingBottom: 20,
    width: 320,
    backgroundColor: colors.white,
    elevation: 4,
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
    fontFamily: font.openSans,
    textAlign: 'center'
  },
  starsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    marginRight: 2,
  }
})

export default RatingModal
