import * as React from 'react';
import {View} from 'react-native';
import MainTitleNavigationBar from '.';

class StickyStayCollapsibleTitleNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        stayCollapsed
        collapsible
        stickyCollapsible
        stickyHeight={100}
        StickyComponent={() => (
          <View style={{backgroundColor: 'red', height: 100}} />
        )}
      />
    );
  }
}

export default StickyStayCollapsibleTitleNavigationBar;
