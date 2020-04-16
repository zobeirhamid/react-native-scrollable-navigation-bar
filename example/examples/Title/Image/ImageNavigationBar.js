import * as React from 'react';
import {
  StatusBarComponent,
  StatusBar,
} from 'react-native-scrollable-navigation-bar';
import MainTitleNavigationBar from '..';
import ImagePlaceholder from './ImagePlaceholder';

const InitStatusBar = () => (
  <StatusBarComponent barStyle="light-content" backgroundColor="transparent" />
);

class ImageNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        StatusBar={InitStatusBar}
        afterTransitionPoint={() => {
          StatusBar.setBarStyle('dark-content');
        }}
        beforeTransitionPoint={() => {
          StatusBar.setBarStyle('light-content');
        }}
        HeaderBackgroundComponent={ImagePlaceholder}
      />
    );
  }
}

export default ImageNavigationBar;
