import React, {useContext} from 'react';
import {Animated} from 'react-native';
import Context from './Context';
import {STATUS_BAR_HEIGHT} from '../constants';

type CollapsibleProps = {
  stayCollapsed?: boolean;
  style?: object;
  children?: React.ReactNode;
  zIndex?: number;
} & typeof defaultProps;

const defaultProps = {
  active: false,
  height: 0,
};

const Collapsible = ({
  active,
  stayCollapsed,
  height,
  style,
  children,
  zIndex = 1,
}: CollapsibleProps) => {
  const {animatedValue, navigationBarHeight, transitionPoint} = useContext(
    Context,
  );

  let translateY = Animated.multiply(
    Animated.diffClamp(
      animatedValue.interpolate({
        inputRange: [
          transitionPoint - navigationBarHeight,
          transitionPoint - navigationBarHeight + 1,
        ],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      0,
      height,
    ),
    -1,
  );
  if (stayCollapsed) {
    translateY = animatedValue.interpolate({
      inputRange: [
        transitionPoint - navigationBarHeight,
        transitionPoint - STATUS_BAR_HEIGHT,
      ],
      outputRange: [0, -navigationBarHeight + STATUS_BAR_HEIGHT],
      extrapolate: 'clamp',
    });
  }

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        {
          zIndex,
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          transform: [
            {
              translateY: active ? translateY : 0,
            },
          ],
        },
        style,
      ]}>
      {children}
    </Animated.View>
  );
};

Collapsible.defaultProps = defaultProps;

export default Collapsible;
