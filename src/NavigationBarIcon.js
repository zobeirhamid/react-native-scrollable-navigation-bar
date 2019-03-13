import * as React from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class NavigationBarIcon extends React.Component {
  render() {
    const { name, style, size = 24, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={{ marginHorizontal: 10 }}>
          <Icon
            name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${name}`}
            size={size}
            style={style}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default NavigationBarIcon;
