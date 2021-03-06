import React, { Component } from 'react'
import { ActivityIndicator, Image, View} from 'react-native'


// [FAILED COMPONENT] onLoadStart/onLoad/onLoadEnd not firing
class ImageWithIndicator extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
    this.handleLoadEnd = this.handleLoadEnd.bind(this)
  }

  handleLoadEnd() {
    console.log('handleloadEnd fired', this.state)
    this.setState({ loading: false })
    console.log('handleloadEnd updated state', this.state)
  }

  render() {
    const { imageUrl, styles } = this.props
    return (
      <View>
        { this.state.loading ?
        <ActivityIndicator /> :
        <Image
          source={{ uri: imageUrl }}
          style={styles}
          onLoad={this.handleLoadEnd}
          onLoadEnd={this.handleLoadEnd}
        />
        }
      </View>
    )
  }
}

const cont = {
  flex: 1,
  borderColor: 'red',
  borderWidth: 1,
  height: 90,
  width: 60,
}

export default ImageWithIndicator
