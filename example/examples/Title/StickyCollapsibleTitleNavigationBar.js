import * as React from 'react';
import {View} from 'react-native';
import MainTitleNavigationBar from '.';

class StickyCollapsibleTitleNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        stickyCollapsible
        stickyHeight={50}
        StickyComponent={() => (
          <View style={{backgroundColor: 'red', height: 50}} />
        )}
      />
    );
  }
}

export default StickyCollapsibleTitleNavigationBar;
