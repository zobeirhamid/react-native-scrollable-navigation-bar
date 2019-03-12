import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationBarIcon } from 'react-native-scrollable-navigation-bar';
import BigNavigationBar from './BigNavigationBar';

class BigImageNavigationBar extends React.Component {
  render() {
    return (
      <BigNavigationBar
        image={require('./header.jpg')}
        imageStyle={{ resizeMode: 'stretch', width: 375 }}
        titleStyle={{ color: 'black' }}
        bigTitleStyle={{ color: 'white' }}
        bigBackButton={{ style: { color: 'white' } }}
        onReached={() => {
          if (Platform.OS === 'android') StatusBar.setBackgroundColor('white');
          StatusBar.setBarStyle('dark-content');
        }}
        onUnReached={() => {
          if (Platform.OS === 'android')
            StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.5)');
          StatusBar.setBarStyle('light-content');
        }}
        leftIcons={[<NavigationBarIcon name="heart" onPress={() => {}} />]}
        bigLeftIcons={[
          <NavigationBarIcon
            name="heart"
            onPress={() => {}}
            style={{ color: 'white' }}
          />
        ]}
        statusBar={{
          barStyle: 'light-content',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
        {...this.props}
      />
    );
  }
}

export default BigImageNavigationBar;
