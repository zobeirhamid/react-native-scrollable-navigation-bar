import React from 'react';
import BigImageNavigationBar from './BigImageNavigationBar';

class BigImageParallaxNavigationBar extends React.Component {
  render() {
    return <BigImageNavigationBar parallax={1} {...this.props} />;
  }
}

export default BigImageParallaxNavigationBar;
