import React, { useContext, useRef } from 'react';
import { Animated } from 'react-native';

const AnimatedValueContext = React.createContext<Animated.Value | undefined>(
  undefined
);

export const useAnimatedValue = () => {
  const context = useContext(AnimatedValueContext);

  if (context === undefined) {
    throw new Error(
      'useAnimatedValue must be used within a AnimatedValueProvider'
    );
  }

  return context;
};

export const AnimatedValueProvider: React.FC<{
  animatedValue?: Animated.Value;
}> = ({ children, animatedValue }) => {
  const animatedValueContext = useRef(
    animatedValue !== undefined ? animatedValue : new Animated.Value(0)
  ).current;

  return (
    <AnimatedValueContext.Provider value={animatedValueContext}>
      {children}
    </AnimatedValueContext.Provider>
  );
};
