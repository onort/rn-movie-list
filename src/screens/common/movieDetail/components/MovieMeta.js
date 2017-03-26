import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'

import { colors, font, fontSize } from '../../../../theme'

function colorize(rating) {
  if (typeof rating !== 'number') rating = Number(rating)
  if (rating > 7.0) return '#1cad20'
  else if (rating > 6.5) return  '#4aad1c'
  else if (rating > 6.0) return  '#86ad1c'
  else if (rating > 5.5) return '#e0d61d'
  else return '#ad1313'
}

const MovieMeta = ({ details }) => {
  const { release_date, runtime, vote_average, vote_count } = details
  const release = moment(release_date).format('DD MMM YYYY')
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={[styles.scoreBadge, { backgroundColor: colorize(vote_average)}]}>
          <Text style={styles.score}>{vote_average || '?'}</Text>
        </View>
        <Text style={styles.count}>{vote_count} votes</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detail}>
          <Icon name="today" color={colors.gray50} size={20} style={{ marginRight: 5 }} />
          { release_date ?
            <Text style={styles.detailText}>{release}</Text> :
            <Text style={styles.detailText}>no data</Text>
          }
        </View>
        <View style={styles.detail}>
          <Icon name="access-time" color={colors.gray50} size={20} style={{ marginRight: 5 }} />
        { runtime ?
          <Text style={styles.detailText}>{runtime} mins</Text> :
          <Text style={styles.detailText}>no data</Text>
        }
        </View>
      </View>
    </View>
  )
}

const styles = {
  container: {
    // flex: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 1,
  },
  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  scoreBadge: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 50,
  },
  score: {
    color: colors.white,
    fontSize: fontSize.default,
    fontFamily: font.openSansBold,
  },
  count: {
    marginTop: 10,
  },
  detailContainer: {
    paddingVertical: 10,
    borderTopColor: colors.gray25,
    borderTopWidth: 1,
  },
  detail: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  detailText: {
    fontSize: fontSize.small,
    color: colors.gray50,
  }
}

export default MovieMeta
