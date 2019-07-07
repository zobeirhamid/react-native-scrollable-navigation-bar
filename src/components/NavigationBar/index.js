// @flow
import * as React from 'react';
import { Animated, View } from 'react-native';
import NavigationBarTitle from './NavigationBarTitle';
import { STATUS_BAR_HEIGHT, NAVIGATION_BAR_HEIGHT } from '../../constants';
import type {
  NavigationBarProps,
  NavigationBarDefaultProps
} from '../../types';

class NavigationBar extends React.Component<NavigationBarProps> {
  static defaultProps: NavigationBarDefaultProps = {
    navigationBarHeight: NAVIGATION_BAR_HEIGHT,
    leftIcons: null,
    rightIcons: null,
    BackButton: () => null
  };

  render() {
    const {
      title,
      titleStyle,
      backgroundColor,
      style,
      BackButton,
      leftIcons,
      rightIcons,
      navigationBarHeight,
      borderColor
    } = this.props;
    return (
      <Animated.View
        style={[
          {
            backgroundColor,
            height: navigationBarHeight,
            flex: 1
          },
          style
        ]}
      >
        <View
          style={{
            paddingTop: STATUS_BAR_HEIGHT,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            borderBottomWidth: borderColor !== undefined ? 1 : 0,
            borderColor
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            {BackButton !== undefined && BackButton !== null && <BackButton />}
            {React.Children.map(leftIcons, (child, index) => ({
              ...child,
              key: child.props.name + index
            }))}
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            {React.Children.map(rightIcons, (child, index) => ({
              ...child,
              key: child.props.name + index
            }))}
          </View>
          <NavigationBarTitle titleStyle={titleStyle}>
            {title}
          </NavigationBarTitle>
        </View>
      </Animated.View>
    );
  }
}

export default NavigationBar;
