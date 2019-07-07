import * as React from 'react';
import { View } from 'react-native';
import MainRegularNavigationBar from '.';

class CollapsibleStickyRegularNavigationBar extends React.Component {
  render() {
    return (
      <MainRegularNavigationBar
        stickyCollapsible
        collapsible
        StickyComponent={() => (
          <View style={{ backgroundColor: 'red', height: 50 }} />
        )}
      />
    );
  }
}

export default CollapsibleStickyRegularNavigationBar;
