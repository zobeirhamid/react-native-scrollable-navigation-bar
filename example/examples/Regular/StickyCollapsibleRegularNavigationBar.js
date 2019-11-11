import * as React from 'react';
import {View} from 'react-native';
import MainRegularNavigationBar from '.';

class StickyCollapsibleRegularNavigationBar extends React.Component {
  render() {
    return (
      <MainRegularNavigationBar
        stickyCollapsible
        stickyHeight={100}
        StickyComponent={() => (
          <View style={{backgroundColor: 'red', height: 100}} />
        )}
      />
    );
  }
}

export default StickyCollapsibleRegularNavigationBar;
