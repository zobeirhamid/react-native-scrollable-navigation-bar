import * as React from 'react';
import { StatusBar } from 'react-native';
import MainTitleNavigationBar from '..';
import ImagePlaceholder from './ImagePlaceholder';

class ParallaxImageNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        afterTransitionPoint={() => StatusBar.setBarStyle('dark-content')}
        beforeTransitionPoint={() => StatusBar.setBarStyle('light-content')}
        parallax={0.5}
        ImageComponent={() => <ImagePlaceholder />}
      />
    );
  }
}

export default ParallaxImageNavigationBar;
