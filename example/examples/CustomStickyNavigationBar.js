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
        NavigationBarComponent={props => (
          <StickyNavigationBar {...props}>
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
