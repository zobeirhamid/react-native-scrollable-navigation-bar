import * as React from 'react';
import { View } from 'react-native';
import MainTitleNavigationBar from '.';

class StickyTitleNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        StickyComponent={() => (
          <View style={{ backgroundColor: 'red', height: 50 }} />
        )}
      />
    );
  }
}

export default StickyTitleNavigationBar;
