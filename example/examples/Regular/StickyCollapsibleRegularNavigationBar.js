import * as React from 'react';
import { View } from 'react-native';
import MainRegularNavigationBar from '.';

class StickyCollapsibleRegularNavigationBar extends React.Component {
  render() {
    return (
      <MainRegularNavigationBar
        stickyCollapsible
        StickyComponent={() => (
          <View style={{ backgroundColor: 'red', height: 50 }} />
        )}
      />
    );
  }
}

export default StickyCollapsibleRegularNavigationBar;
