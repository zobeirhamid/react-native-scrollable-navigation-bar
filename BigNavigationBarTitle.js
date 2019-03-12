import * as React from 'react';
import { Animated, View, Text } from 'react-native';

class BigNavigationBarTitle extends React.Component {
  render() {
    const {
      animatedValue,
      children,
      bigTitleStyle,
      increaseFontSize
    } = this.props;
    return (
      <Animated.Text
        style={[
          {
            fontWeight: 'bold',
            fontSize: increaseFontSize
              ? animatedValue.interpolate({
                  inputRange: [-40, 0],
                  outputRange: [44, 36],
                  extrapolate: 'clamp'
                })
              : 36
          },
          bigTitleStyle
        ]}
      >
        {children}
      </Animated.Text>
    );
  }
}

export default BigNavigationBarTitle;
