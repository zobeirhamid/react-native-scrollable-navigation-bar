import * as React from 'react';
import { View } from 'react-native';
import MainRegularNavigationBar from '.';

class StickyRegularNavigationBar extends React.Component {
  render() {
    return (
      <MainRegularNavigationBar
        StickyComponent={() => (
          <View style={{ backgroundColor: 'red', height: 50 }} />
        )}
      />
    );
  }
}

export default StickyRegularNavigationBar;
