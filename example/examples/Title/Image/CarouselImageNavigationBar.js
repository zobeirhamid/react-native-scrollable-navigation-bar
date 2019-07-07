import * as React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { StatusBarComponent } from 'react-native-scrollable-navigation-bar';
import MainTitleNavigationBar from '..';
import ImagePlaceholder from './ImagePlaceholder';

class CarouselImageNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        StatusBar={() => (
          <StatusBarComponent
            barStyle="light-content"
            backgroundColor="dodgerblue"
          />
        )}
        beforeTransitionPoint={() => StatusBar.setBarStyle('light-content')}
        afterTransitionPoint={() => StatusBar.setBarStyle('dark-content')}
        fadeOut
        ImageComponent={() => (
          <ScrollView pagingEnabled horizontal bounces={false}>
            <ImagePlaceholder />
            <ImagePlaceholder />
            <ImagePlaceholder />
          </ScrollView>
        )}
      />
    );
  }
}

export default CarouselImageNavigationBar;
