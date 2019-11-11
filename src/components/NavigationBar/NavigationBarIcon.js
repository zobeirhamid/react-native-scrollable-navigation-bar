// @flow
import * as React from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type { NavigationBarIconProps } from '../../types';

class NavigationBarIcon extends React.Component<NavigationBarIconProps> {
  static defaultProps = {
    size: 24,
    IconProvider: Ionicons
  };

  render() {
    const { name, style, size, onPress, IconProvider, children } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={{ marginHorizontal: 10 }}>
          {children !== undefined ? (
            React.cloneElement(children, { size })
          ) : (
            <IconProvider name={name} size={size} style={style} />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export default Animated.createAnimatedComponent(NavigationBarIcon);
