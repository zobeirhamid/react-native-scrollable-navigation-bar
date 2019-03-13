import React from 'react';
import { ScrollableAnimatedNavBar } from 'react-native-scrollable-navigation-bar';

class AnimatedNavigationBar extends React.Component {
  render() {
    return (
      <ScrollableAnimatedNavBar
        backgroundColor="white"
        height={200}
        borderColor="#EAEAEA"
        title="Headline"
        titleStyle={{ color: 'black' }}
        statusBar={{
          barStyle: 'dark-content',
          backgroundColor: 'white'
        }}
        {...this.props}
      />
    );
  }
}

export default AnimatedNavigationBar;
