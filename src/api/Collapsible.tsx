import React, {useContext, useMemo} from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useCode,
  set,
  min,
  max,
  add,
  cond,
  defined,
  diff,
  multiply,
  block,
} from 'react-native-reanimated';
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

// @ts-ignore
function diffClamp(a, minVal, maxVal, value) {
  return set(
    value,
    min(max(add(cond(defined(value), value, a), diff(a)), minVal), maxVal),
  );
}

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

  let translateY = new Animated.Value(0);
  const diff = new Animated.Value(0);

  if (active) {
    if (stayCollapsed) {
      // @ts-ignore
      translateY = interpolate(animatedValue, {
        inputRange: [
          transitionPoint - navigationBarHeight,
          transitionPoint - STATUS_BAR_HEIGHT,
        ],
        outputRange: [0, -navigationBarHeight + STATUS_BAR_HEIGHT],
        extrapolate: Extrapolate.CLAMP,
      });
    } else {
      useCode(
        () =>
          block([
            diffClamp(
              animatedValue.interpolate({
                inputRange: [
                  transitionPoint - navigationBarHeight,
                  transitionPoint - navigationBarHeight + 1,
                ],
                outputRange: [0, 1],
                extrapolateLeft: Extrapolate.CLAMP,
              }),
              0,
              height,
              diff,
            ),
            set(translateY, multiply(diff, -1)),
          ]),
        [animatedValue, translateY],
      );
    }
    /*
    translateY = animatedValue.interpolate({
      inputRange: [
        transitionPoint - navigationBarHeight,
        transitionPoint - navigationBarHeight + 1,
      ],
      outputRange: [0, 1],
      extrapolateLeft: Extrapolate.CLAMP,
    });
    */
    // translateY = Animated.multiply(translateY, -1);
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
