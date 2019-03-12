import * as React from 'react';
import { View, Text } from 'react-native';
import BigNavigationBarTitle from './BigNavigationBarTitle';
import NavigationBar from './NavigationBar';

class BigNavigationBar extends React.Component {
  render() {
    const {
      animatedValue,
      height,
      backgroundColor,
      borderColor,
      bigTitleStyle,
      title,
      increaseFontSize
    } = this.props;
    return (
      <View
        style={{
          height,
          justifyContent: 'flex-end',
          padding: 15,
          backgroundColor,
          borderBottomWidth: borderColor !== undefined ? 1 : 0,
          borderBottomColor: borderColor
        }}
      >
        <BigNavigationBarTitle
          animatedValue={animatedValue}
          bigTitleStyle={bigTitleStyle}
          increaseFontSize={increaseFontSize}
        >
          {title}
        </BigNavigationBarTitle>
      </View>
    );
  }
}

export default BigNavigationBar;
