import * as React from 'react';
import { Animated } from 'react-native';

export function scaleable(Node, animatedValue) {
  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: animatedValue.interpolate({
              inputRange: [-10, 0],
              outputRange: [1.1, 1],
              extrapolateRight: 'clamp'
            })
          }
        ]
      }}
    >
      {Node}
    </Animated.View>
  );
}

export function disappear(
  Node,
  animatedValue,
  start,
  end,
  shouldDisappear = true
) {
  if (!shouldDisappear) return Node;
  return (
    <Animated.View
      style={{
        opacity: animatedValue.interpolate({
          inputRange: [start, end],
          outputRange: [1, 0],
          extrapolate: 'clamp'
        })
      }}
    >
      {Node}
    </Animated.View>
  );
}

export function appear(Node, animatedValue, start, end, shouldAppear = true) {
  if (!shouldAppear) return Node;
  return (
    <Animated.View
      pointerEvents="box-none"
      style={{
        zIndex: 9999,
        opacity: animatedValue.interpolate({
          inputRange: [start, end],
          outputRange: [0, 1],
          extrapolate: 'clamp'
        })
      }}
    >
      {Node}
    </Animated.View>
  );
}
