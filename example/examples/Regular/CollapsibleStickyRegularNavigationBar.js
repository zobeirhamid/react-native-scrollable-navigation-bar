import * as React from 'react';
import {View} from 'react-native';
import MainRegularNavigationBar from '.';

class CollapsibleStickyRegularNavigationBar extends React.Component {
  render() {
    return (
      <MainRegularNavigationBar
        stickyCollapsible
        collapsible
        stickyHeight={100}
        StickyComponent={() => (
          <View style={{backgroundColor: 'red', height: 100}} />
        )}
      />
    );
  }
}

export default CollapsibleStickyRegularNavigationBar;
