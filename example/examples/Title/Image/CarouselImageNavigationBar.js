import * as React from 'react';
import {StatusBar, ScrollView} from 'react-native';
import {StatusBarComponent} from 'react-native-scrollable-navigation-bar';
import MainTitleNavigationBar from '..';
import ImagePlaceholder from './ImagePlaceholder';

const HeaderBackgroundComponent = () => (
  <ScrollView pagingEnabled horizontal bounces={false}>
    <ImagePlaceholder />
    <ImagePlaceholder />
    <ImagePlaceholder />
  </ScrollView>
);

class CarouselImageNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        StatusBar={() => (
          <StatusBarComponent
            barStyle="light-content"
            backgroundColor="transparent"
          />
        )}
        beforeTransitionPoint={() => StatusBar.setBarStyle('light-content')}
        afterTransitionPoint={() => StatusBar.setBarStyle('dark-content')}
        fadeOut
        parallax={0.5}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
      />
    );
  }
}

export default CarouselImageNavigationBar;
