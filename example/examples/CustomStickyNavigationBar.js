import React from 'react';
import { StatusBar, View } from 'react-native';
import {
  StickyNavigationBar,
  constants
} from 'react-native-scrollable-navigation-bar';
import RegularNavigationBar from './RegularNavigationBar';

class CustomStickyNavigationBar extends React.Component {
  render() {
    return (
      <RegularNavigationBar
        navigationBarHeight={100}
        NavigationBarComponent={props => (
          <StickyNavigationBar
            NavigationBarComponent={() => (
              <View style={{ height: 100, backgroundColor: 'red' }} />
            )}
            {...props}
            backgroundColor="red"
          >
            <View style={{ height: 200, backgroundColor: 'dodgerblue' }} />
          </StickyNavigationBar>
        )}
        stickyHeight={200}
        backgroundColor="white"
        onSticky={() => {
          StatusBar.setBarStyle('light-content');
        }}
        onUnSticky={() => {
          StatusBar.setBarStyle('dark-content');
        }}
        statusBar={{
          barStyle: 'dark-content',
          backgroundColor: 'transparent'
        }}
        {...this.props}
      />
    );
  }
}

export default CustomStickyNavigationBar;
