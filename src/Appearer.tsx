import { useMeasurements } from './contexts/MeasurementsContext';
import React, { useMemo, useRef, useEffect } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { useHasReachedTransitionPoint } from './contexts/HasReachedTransitionPoint.tsx';

interface AppearerProps {
  style?: ViewStyle;
}

const Appearer: React.FC<AppearerProps> = (props) => {
  const { hasReachedTransitionPoint } = useHasReachedTransitionPoint();
  const { transitionPoint } = useMeasurements();

  const { children, style = {} } = props;

  const opacityAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnimatedValue, {
      toValue: hasReachedTransitionPoint ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [hasReachedTransitionPoint, opacityAnimatedValue]);

  const transitionStyle = useMemo(() => {
    if (transitionPoint <= 0) return style;
    return [
      style,
      {
        opacity: opacityAnimatedValue,
      },
    ];
  }, [style, opacityAnimatedValue, transitionPoint]);

  return (
    <Animated.View style={transitionStyle} pointerEvents={'box-none'}>
      {children}
    </Animated.View>
  );
};

export default Appearer;
