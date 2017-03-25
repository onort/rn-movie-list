import React from 'react'
import { Text, View } from 'react-native'

import { colors, fontSize } from '../../../../theme'

const Crew = ({ crew }) => {
  return (
    <View style={styles.crewContainer}>
      {crew.slice(0,4).map(Person)}
    </View>
  )
}

const Person = (person) => {
  return (
    <View key={person.credit_id} style={styles.crew}>
      <View style={[styles.cell, styles.jobCell]}>
        <Text style={styles.crewJob}>{person.job}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.crewName}>{person.name}</Text>
      </View>
    </View>
  )
}

const styles = {
  crewContainer:{
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: colors.white,
    elevation: 1,
    marginVertical: 10,
  },
  crew: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cell: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomColor: colors.gray10,
    borderBottomWidth: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: colors.gray20,
  },
  jobCell: {
    flex: 0.6,
  },
  crewJob: {
  },
  crewName: {
  },
}

export default Crew
