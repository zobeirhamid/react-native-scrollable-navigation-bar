import React from 'react';
import CustomNavigationBar from './CustomNavigationBar';

class CustomImageNavigationBar extends React.Component {
  render() {
    return (
      <CustomNavigationBar
        bigTitleStyle={{ color: 'white' }}
        image={require('./header.jpg')}
        {...this.props}
      />
    );
  }
}

export default CustomImageNavigationBar;
