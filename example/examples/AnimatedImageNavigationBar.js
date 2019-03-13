import React from 'react';
import AnimatedNavigationBar from './AnimatedNavigationBar';

class AnimatedImageNavigationBar extends React.Component {
  render() {
    return (
      <AnimatedNavigationBar
        bigTitleStyle={{ color: 'white' }}
        image={require('./header.jpg')}
        statusBar={{
          barStyle: 'light-content',
          backgroundColor: 'transparent'
        }}
        {...this.props}
      />
    );
  }
}

export default AnimatedImageNavigationBar;
