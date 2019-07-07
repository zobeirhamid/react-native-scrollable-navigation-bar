import * as React from 'react';
import { Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class ImagePlaceholder extends React.Component {
  render() {
    return (
      <Image source={require('./header.jpg')} style={{ width, height: 200 }} />
    );
  }
}

export default ImagePlaceholder;
