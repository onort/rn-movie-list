import React, { Component } from 'react'
import { Keyboard, ListView, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'

import { IconButton, ListItem, LoadingScreen } from '../common'
import styles from './styles'
import { clearSearchResults, searchMovie, setSelected } from '../../actions'

class AddMovie extends Component {

   constructor(props) {
    super(props)
    this.state = {
      input: '',
      searchedFor: ''
    }
    this.handleItemPress = this.handleItemPress.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.searchMovie = this.searchMovie.bind(this)
  }

  static navigationOptions = {
    title: 'Add Movie',
    header: ({ goBack }) => ({
      left: <IconButton name="close" size={25} color="#333" onPress={() => goBack()} />
    })
  }

  compotnentWillMount() {
    this.createDataSource(this.props.searchResults)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.searchResults)
  }

  componentWillUnmount() {
    // need another way to clear search results if search results can link to movie detail screen
    this.props.clearSearchResults()
  }

  createDataSource(results) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(results)
  }

  handleItemPress(movie) {
    this.props.setSelected(movie)
    this.props.navigation.navigate('SearchMovieDetail', { title: movie.title })
  }

  renderRow(movie) {
    return (
      <ListItem
        movie={movie}
        handlePress={() => this.handleItemPress(movie)}
      />
    )
  }

  searchMovie() {
    this.props.searchMovie(this.state.input)
    this.setState({ searchedFor: this.state.input, input: '' })
    Keyboard.dismiss()
  }

  renderResults() {
    const { loading, searchResults } = this.props
    const { searchedFor } = this.state
    if (loading) return <LoadingScreen />
    else if (!loading && searchedFor.length > 1 && searchResults.length === 0) {
      return (<Text style={styles.resultsText}>No results found for "{searchedFor}"</Text>)
    }
    else if (!loading && searchResults.length) {
      return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      )
    }
    else return null
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
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
        <View style={styles.resultsContainer}>
          {this.renderResults()}
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    searchResults: state.searchResults
  }
}

export default connect(mapStateToProps, { clearSearchResults, searchMovie, setSelected })(AddMovie)
