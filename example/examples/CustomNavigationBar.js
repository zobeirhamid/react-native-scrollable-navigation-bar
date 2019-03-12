import React from 'react';
import { ScrollableCustomNavBar } from 'react-native-scrollable-navigation-bar';

class CustomNavigationBar extends React.Component {
  render() {
    return (
      <ScrollableCustomNavBar
        backgroundColor="white"
        height={200}
        borderColor="#EAEAEA"
        title="Headline"
        titleStyle={{ color: 'black' }}
        {...this.props}
      />
    );
  }
}

export default CustomNavigationBar;
