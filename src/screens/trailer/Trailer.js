import React, { Component } from 'react'
import { WebView } from 'react-native'
import { connect } from 'react-redux'

import { BackButton } from '../common'

// import YouTube from 'react-native-youtube'
// import { YouTubeApiKey } from '../../api/config'

class Trailer extends Component {

  static navigationOptions = {
    header: ({ goBack }) => ({
      style: { backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, right: 0, },
      left: <BackButton onBack={() => goBack()} />
    })
  }

  render() {
    let videoId
    if (!this.props.movie.videos[0]) videoId = '80X0pbCV_t4'
    else videoId = this.props.movie.videos[0].key
    return (
      <WebView
        source={{ uri: `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1` }}
        style={{ flex: 1 }}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(Trailer)

// Experiment with react-native-youtube
/*<YouTube
  apiKey={YouTubeApiKey}
  videoId="X-XwgZSe0is"
  play
  hidden={false}
  rel
/>*/
