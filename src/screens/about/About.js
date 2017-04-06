import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import { colors, font, fontSize } from '../../theme'

import { CloseButton } from '../common'

class About extends Component {

  static navigationOptions = {
    header: ({ goBack }) => ({
      style: { backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, right: 0, },
      right: <CloseButton onBack={() => goBack()} />,
      left: null
    }),
    tabBar: {
      visible: false,
    }
  }

  render() {
    return (
      <View style={[styles.container, styles.center]}>
        <View style={styles.aboutContainer}>
          <View style={styles.sectionContainer}>
            <View style={[styles.logoContainer, styles.center]}>
              <Image source={{ uri: 'http://placehold.it/200x200' }} style={styles.logo} />
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={[styles.brandingContainer, styles.center]}>
              <Text style={styles.brandingText}>Movielist App</Text>
              <Text style={styles.version}>0.0.1</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.copyContainer}>
              <Text style={styles.copyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              <Text style={styles.copyText}>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</Text>
            </View>
          </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity>
                <View style={styles.bigButton}>
                  <Text style={styles.buttonText}>Rate This App</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.bigButton}>
                  <Text style={styles.buttonText}>Feedback</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray25,
    paddingVertical: 40,
    paddingHorizontal: 50,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutContainer: {
    backgroundColor: colors.white,
    elevation: 2,
    paddingVertical: 15,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  sectionContainer: {
    // elevation: 1,
    // marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  logoContainer: {
    // paddingVertical: 10,
  },
  logo: {
    borderColor: colors.gray05,
    borderWidth: 1,
    borderRadius: 4,
    height: 128,
    width: 128,
  },
  brandingContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
  },
  brandingText: {
    fontSize: fontSize.large,
    color: colors.gray70,
    fontFamily: font.title,
  },
  version: {
    fontSize: fontSize.small,
    color: colors.gray40,
    fontFamily: font.title,
  },
  copyContainer: {
    paddingHorizontal: 20,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  copyText: {
    fontFamily: font.roboReg,
    fontSize: fontSize.small,
    color: colors.gray70,
    lineHeight: 18,
    paddingVertical: 10,
    textAlign: 'center',
  },
  actionsContainer: {
    // flex: 1,
    paddingHorizontal: 20,
  },
  bigButton: {
    // flex: 1,
    backgroundColor: colors.gray10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2,
    // borderColor: colors.gray70,
    // borderWidth: 1,
    // borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.gray70,
    textAlign: 'center',
  }
})

export default About
