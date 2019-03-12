import React from 'react';
import {
  ScrollableNavBar,
  NavigationBarIcon
} from 'react-native-scrollable-navigation-bar';
import NavigationService from '../NavigationService';

class RegularNavigationBar extends React.Component {
  render() {
    return (
      <ScrollableNavBar
        title="Regular"
        backgroundColor="white"
        borderColor="#EAEAEA"
        withShadow
        backButton={{
          visible: true,
          onPress: () => NavigationService.goBack()
        }}
        leftIcons={[<NavigationBarIcon name="heart" onPress={() => {}} />]}
        rightIcons={[<NavigationBarIcon name="rocket" onPress={() => {}} />]}
        statusBar={{
          barStyle: 'dark-content',
          backgroundColor: 'white'
        }}
        {...this.props}
      />
    );
  }
}

export default RegularNavigationBar;
