import React from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

import { colors, font, fontSize } from '../../../theme'

const AboutModal = ({ onClose, visible }) => {
  const TMDbLogo = require('../../_assets/tmdb.png')
  return (
    <Modal
      animationType={'fade'}
      visible={visible}
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.container, styles.center]}>
          <TouchableWithoutFeedback>
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
                  <Text style={styles.copyText}>This product uses the TMDb API but is not endorsed or certified by TMDb.</Text>
                  <View style={[styles.tmdbContainer, styles.center]}>
                    <Image source={TMDbLogo} style={styles.tmdbLogo} />
                  </View>
                </View>
              </View>
                <View style={styles.actionsContainer}>
                  <TouchableOpacity>
                    <View style={styles.bigButton}>
                      <Text style={styles.buttonText}>Rate This App</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // paddingVertical: 40,
    paddingHorizontal: 60,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutContainer: {
    backgroundColor: colors.white,
    elevation: 2,
    paddingVertical: 10,
    borderRadius: 4,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  sectionContainer: {
    // elevation: 1,
    // marginVertical: 5,
    padding: 5,
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
    height: 100,
    width: 100,
  },
  brandingContainer: {
    // borderColor: 'blue',
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
    // borderColor: 'green',
    // borderWidth: 1,
  },
  copyText: {
    fontFamily: font.roboReg,
    fontSize: fontSize.xsmall,
    color: colors.gray70,
    lineHeight: 18,
    paddingBottom: 10,
    textAlign: 'center',
  },
  tmdbContainer: {
    // height: 40,
  },
  tmdbLogo: {
    height: 30,
    width: 75,
    resizeMode: 'contain',

  },
  actionsContainer: {
    // flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bigButton: {
    // flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    // elevation: 2,
    borderColor: colors.gray70,
    borderWidth: 1,
    // borderRadius: 5,
    // marginVertical: 5,
  },
  buttonText: {
    fontSize: fontSize.small,
    fontFamily: font.title,
    color: colors.gray70,
    textAlign: 'center',
  }
})

export default AboutModal
