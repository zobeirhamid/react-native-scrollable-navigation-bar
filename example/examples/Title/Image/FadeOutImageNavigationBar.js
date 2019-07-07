import * as React from 'react';
import { StatusBar } from 'react-native';
import MainTitleNavigationBar from '..';
import ImagePlaceholder from './ImagePlaceholder';

class FadeOutImageNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        afterTransitionPoint={() => StatusBar.setBarStyle('dark-content')}
        beforeTransitionPoint={() => StatusBar.setBarStyle('light-content')}
        fadeOut
        ImageComponent={() => <ImagePlaceholder />}
      />
    );
  }
}

export default FadeOutImageNavigationBar;
