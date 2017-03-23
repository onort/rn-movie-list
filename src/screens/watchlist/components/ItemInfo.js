import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors, font, fontSize } from '../../../theme'

const ItemInfo = ({ movie, handlePress }) => {
  const { title, vote_average } = movie
  return (
    <View style={styles.itemsContainer}>
      <View style={[styles.item, styles.badge]}></View>
      <View style={[styles.item, styles.arrow]}>
        <TouchableOpacity onPress={handlePress}>
          <Icon name="keyboard-arrow-right" color="#fff" size={40} />
        </TouchableOpacity>
      </View>
      <View style={[styles.item, styles.meta]}>
        <View style={styles.metaContainer}>
          <Text style={styles.title} onPress={handlePress}>{title}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1
  },
  item: {
    // borderWidth: 1,
    // borderColor: colors.white,
  },
  badge: {
    flex: 1,
  },
  arrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  meta: {
    flex: 1,
  },
  metaContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
    width: 240,
    alignSelf: 'flex-end',
    marginRight: 30,
    marginBottom: 15
  },
  title: {
    color: colors.white,
    fontSize: fontSize.default,
    fontFamily: font.title,
  },
  time: {
    color: colors.white,
    fontSize: 14
  },
  vote: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default ItemInfo
