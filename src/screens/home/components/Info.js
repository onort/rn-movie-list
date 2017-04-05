import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors, font, fontSize } from '../../../theme'

const Info = ({ onAdd, toWatch, watched }) => {
  // Watched this month logic (in utils or HomeScreen)?

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.statsContainer}>
        <ListInfo title="Movies in watchlist" count={toWatch} />
        <ListInfo title="Watched this month" count={watched} />
      </View>
      <View style={[styles.item, styles.buttonGroup]}>
        <BigButton title="Add to list" color={colors.gray60} handlePress={onAdd} />
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
        <View style={styles.badge}>
          <Text style={styles.count}>{count}</Text>
        </View>
      </View>
    </View>
  )
}

const BigButton = ({ color, handlePress, title }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.buttonContainer, { backgroundColor: color }]}>
        <Icon
          name="add"
          color="#fff"
          size={30}
        />
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  statsContainer: {
    backgroundColor: colors.gray70,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    elevation: 4,
    paddingVertical: 15,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  titleContainer: {
    flex: 4,
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
    color: colors.gray05,
    fontSize: fontSize.medium,
    fontFamily: font.roboReg,
  },
  badge: {
    backgroundColor: colors.gray90,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    color: colors.gray15,
    fontSize: fontSize.medium,
    fontFamily: font.title,
  },
  buttonGroup: {
    justifyContent: 'flex-end',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    // borderColor: 'red',
    // borderWidth: 1,
    // height: 30,
    // width: 140, // calculate with Dimension?
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.default,
    fontFamily: font.title,
    textAlign: 'center',
  }
})

export default Info
