import React, { Component } from 'react'
import { TextInput, View } from 'react-native'

import { IconButton } from '../common'
import styles from './styles'
import moviesApi from '../../api/moviesApi'

class AddMovie extends Component {

   constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.searchMovie = this.searchMovie.bind(this)
  }

  static navigationOptions = {
    title: 'Add Movie',
    header: ({ goBack }) => ({
      left: <IconButton name="close" size={25} color="#333" onPress={() => goBack()} />
    })
  }

  async searchMovie() {
    this.setState({ input: '' })
    const movies = await moviesApi.searchMovie(this.state.input)
    console.log('Async movies are', movies)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={input => this.setState({ input })}
          value={this.state.input}
          style={styles.inputField}
          placeholder="Search for a movie..."
        />
        <IconButton
          name="search"
          size={25}
          color="#333"
          onPress={this.searchMovie}
          style={styles.searchButton} 
        />
      </View>
    )
  }
}

export default AddMovie
