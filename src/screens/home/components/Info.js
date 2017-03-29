import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors, font, fontSize } from '../../../theme'

const Info = ({ onAdd, onWatchlist, toWatch, watched }) => {
  return (
    <View style={styles.container}>
        <ListInfo title="Movies to watch" count={toWatch} />
        <ListInfo title="Watched this month" count={watched} />
      <View style={[styles.item, styles.buttonGroup]}>
        <BigButton title="Watchlist" color={colors.gray60} handlePress={onWatchlist} />
        <BigButton title="Add" color={colors.gray60} handlePress={onAdd} />
      </View>
    </View>
  )
}

const ListInfo = ({ title, count }) => {
  return (
    <View style={styles.item}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}:</Text>
      </View>
      <View style={styles.countContainer}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  )
}

const BigButton = ({ color, handlePress, title }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.buttonContainer, { backgroundColor: color }]}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    // alignItems: 'center',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  countContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'yellow',
    // borderWidth: 1,
  },
  title: {
    color: colors.gray15,
    fontSize: fontSize.medium,
  },
  count: {
    color: colors.gray15,
    fontSize: fontSize.medium,
  },
  buttonGroup: {
    justifyContent: 'space-between'
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    height: 30,
    width: 140, // calculate with Dimension?
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.default,
    fontFamily: font.ubuntuBold,
    textAlign: 'center',
  }
})

export default Info
