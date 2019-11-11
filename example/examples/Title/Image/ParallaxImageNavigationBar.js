import * as React from 'react';
import { StatusBar } from 'react-native';
import { StatusBarComponent } from 'react-native-scrollable-navigation-bar';
import MainTitleNavigationBar from '..';
import ImagePlaceholder from './ImagePlaceholder';

class ParallaxImageNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        StatusBar={() => (
          <StatusBarComponent
            barStyle="light-content"
            backgroundColor="transparent"
          />
        )}
        afterTransitionPoint={() => StatusBar.setBarStyle('dark-content')}
        beforeTransitionPoint={() => StatusBar.setBarStyle('light-content')}
        parallax={0.5}
        HeaderBackgroundComponent={() => <ImagePlaceholder />}
      />
    );
  }
}

export default ParallaxImageNavigationBar;
