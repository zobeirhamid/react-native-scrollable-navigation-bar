import React from 'react';
import BigImageNavigationBar from './BigImageNavigationBar';

class BigImageParallaxNavigationBar extends React.Component {
  render() {
    return <BigImageNavigationBar parallax={0.5} {...this.props} />;
  }
}

export default BigImageParallaxNavigationBar;
