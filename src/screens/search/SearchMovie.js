import React, { Component } from 'react'
import { Keyboard, ListView, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'

import { clearSearchResults, searchMovie, setNotListed } from '../../actions'
import { colors } from '../../theme'
import styles from './styles'
import { routeNames } from '../../constants'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { IconButton, LoadingScreen } from '../common'
import ResultItem from './components/ResultItem'

class SearchMovie extends Component {

   constructor(props) {
    super(props)
    this.state = {
      input: '',
      searchedFor: ''
    }
    this.handleItemPress = this.handleItemPress.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.searchMovie = this.searchMovie.bind(this)
  }

  static navigationOptions = {
    header: ({ goBack }) => ({
      visible: false
    }),
    tabBar: {
      icon: ({ tintColor }) => <Icon name="add" size={25} color={tintColor} />
    }
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
    Keyboard.dismiss()
    this.setState({ searchedFor: '' })
  }

  createDataSource(results) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(results)
  }

  handleItemPress(movie) {
    this.props.setNotListed(movie)
    this.props.navigation.navigate(routeNames.search.detail)
  }

  renderRow(movie) {
    return (
      <ResultItem
        movie={movie}
        handlePress={() => this.handleItemPress(movie)}
      />
    )
  }

  searchMovie() {
    if (this.state.input.length > 0) {
      this.props.searchMovie(this.state.input)
      this.setState({ searchedFor: this.state.input, input: '' })
      Keyboard.dismiss()
    }
    // else show toastr?
  }

  onTextChange(input) {
    this.setState({ input })
  }

  renderResults() {
    const { loading, searchResults } = this.props
    const { searchedFor } = this.state
    if (loading.screen) return <LoadingScreen color={colors.gray20} size={50} backgroundColor={colors.gray90} />
    else if (!loading.screen && searchedFor.length > 1 && searchResults.length === 0) {
      return (<Text style={styles.resultsText}>No results found for "{searchedFor}"</Text>)
    }
    else if (!loading.screen && searchResults.length) {
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
            onChangeText={this.onTextChange}
            value={this.state.input}
            style={styles.inputField}
            underlineColorAndroid={colors.gray40}
            selectionColor={colors.gray40}
            placeholder="Search for a movie..."
            placeholderTextColor={colors.gray40}
            autoFocus={this.state.searchedFor.length ? false : true}
            maxLength={100}
            returnKeyType="search"
            onSubmitEditing={this.searchMovie}
          />
          <IconButton
            name="search"
            size={30}
            color={colors.gray10}
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

export default connect(mapStateToProps, { clearSearchResults, searchMovie, setNotListed })(SearchMovie)
