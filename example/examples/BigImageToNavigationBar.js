import React from 'react';
import BigImageNavigationBar from './BigImageNavigationBar';

class BigImageToNavigationBar extends React.Component {
  render() {
    return <BigImageNavigationBar imageToNavBar {...this.props} />;
  }
}

export default BigImageToNavigationBar;
