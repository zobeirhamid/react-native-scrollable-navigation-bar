import * as React from "react";
import { Animated } from "react-native";

export function scaleable(
  scale: number,
  Node: React.ReactNode,
  animatedValue: Animated.Value
) {
  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: animatedValue.interpolate({
              inputRange: [-10, 0],
              outputRange: [scale, 1],
              extrapolateRight: "clamp",
            }),
          },
        ],
      }}
    >
      {Node}
    </Animated.View>
  );
}

export function disappear(
  Node: React.ReactNode,
  animatedValue: Animated.Value,
  start: number,
  end: number,
  shouldDisappear = true
) {
  if (!shouldDisappear) return Node;
  return (
    <Animated.View
      style={{
        opacity: animatedValue.interpolate({
          inputRange: [start, end],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }),
      }}
    >
      {Node}
    </Animated.View>
  );
}

export function appear(
  Node: React.ReactNode,
  animatedValue: Animated.Value,
  start: number,
  end: number,
  shouldAppear = true
) {
  if (!shouldAppear) return Node;
  return (
    <Animated.View
      pointerEvents="box-none"
      style={{
        zIndex: 9999,
        opacity: animatedValue.interpolate({
          inputRange: [start, end],
          outputRange: [0, 1],
          extrapolate: "clamp",
        }),
      }}
    >
      {Node}
    </Animated.View>
  );
}
export const formatInterpolate = (config) => {
  const { inputRange, outputRange } = config;
  const duplicates = [];
  const visited = [];

  inputRange.forEach((value, index) => {
    if (visited.includes(value)) {
      duplicates.push(index);
    } else {
      visited.push(value);
    }
  });

  return {
    ...config,
    inputRange: inputRange.filter((_, index) => !duplicates.includes(index)),
    outputRange: outputRange.filter((_, index) => !duplicates.includes(index)),
  };
};
