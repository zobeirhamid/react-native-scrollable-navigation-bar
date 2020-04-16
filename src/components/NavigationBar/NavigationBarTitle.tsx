import * as React from 'react';
import { Animated, View } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../../constants';

type NavigationBarTitleProps = {
  children?: React.ReactNode;
  titleStyle?: object;
};

const NavigationBarTitle: React.FC<NavigationBarTitleProps> = props => {
  const { children, titleStyle } = props;
  return (
    <View
      pointerEvents="box-none"
      style={{
        position: 'absolute',
        top: STATUS_BAR_HEIGHT,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.Text style={[{ fontSize: 18, fontWeight: '600' }, titleStyle]}>
        {children}
      </Animated.Text>
    </View>
  );
};

export default NavigationBarTitle;
