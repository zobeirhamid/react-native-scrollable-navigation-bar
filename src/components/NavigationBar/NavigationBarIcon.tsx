import * as React from 'react';
import {Animated, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type NavigationBarIconProps = {
  style?: object;
  onPress?: () => void;
  children?: React.ReactElement;
  key?: string;
};

const defaultProps = {
  name: '',
  size: 24,
  IconProvider: Ionicons,
};

class NavigationBarIcon extends React.Component<
  NavigationBarIconProps & typeof defaultProps
> {
  static defaultProps = defaultProps;

  render() {
    const {name, style, size, IconProvider, children} = this.props;
    return (
      <TouchableOpacity {...this.props} style={undefined}>
        <View style={{marginHorizontal: 10}}>
          {children !== undefined ? (
            React.cloneElement(children, {size})
          ) : (
            <IconProvider name={name} size={size} style={style} />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export default Animated.createAnimatedComponent(NavigationBarIcon);
