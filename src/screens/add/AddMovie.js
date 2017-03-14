import React, { Component } from 'react'
import { ActivityIndicator, ListView, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'

import { IconButton, LoadingScreen } from '../common'
import styles from './styles'
import { clearSearchResults, searchMovie } from '../../actions'

class AddMovie extends Component {

   constructor(props) {
    super(props)
    this.state = {
      input: '',
      searchedFor: ''
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
    this.createDataSource(this.props.searchResults)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.searchResults)
  }

  createDataSource(results) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(results)
  }

  renderRow(movie) {
    return (<Text style={styles.resultsText}>{movie.title}</Text>)
  }

  searchMovie() {
    this.props.searchMovie(this.state.input)
    this.setState({ searchedFor: this.state.input, input: '' })
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

export default connect(mapStateToProps, { clearSearchResults, searchMovie })(AddMovie)
