import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { colors, fontSize } from '../../../../theme'

const Crew = ({ crew }) => {
  return (
    <View style={styles.crewContainer}>
      { crew &&
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {crew.map(Person)}
      </ScrollView>
      }
    </View>
  )
}

const Person = (person) => {
  return (
    <View key={person.credit_id} style={styles.crew}>
      <View style={styles.cell}>
        <Text style={styles.crewJob}>{person.job}</Text>
        <Text style={styles.crewName}>{person.name}</Text>
      </View>
    </View>
  )
}

const styles = {
  crewContainer:{
    flex: 1,
    backgroundColor: colors.white,
    elevation: 1,
  },
  crew: {
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRightColor: colors.gray10,
    borderRightWidth: 1,
    width: 140,

  },
  crewJob: {
    textAlign: 'center',
    marginBottom: 5,
    color: colors.black,
    fontSize: fontSize.default,
  },
  crewName: {
    textAlign: 'center',
    color: colors.gray50,
    fontSize: fontSize.small,
  },
}

export default Crew
