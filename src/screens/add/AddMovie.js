import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import { connect } from 'react-redux'

import { IconButton } from '../common'
import styles from './styles'
import { clearSearchResults, searchMovie } from '../../actions'

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

  componentWillUnmount() {
    // need another way to clear search results if search results can link to movie detail screen
    this.props.clearSearchResults()
  }

  searchMovie() {
    this.props.searchMovie(this.state.input)
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

export default connect(null, { clearSearchResults, searchMovie })(AddMovie)
