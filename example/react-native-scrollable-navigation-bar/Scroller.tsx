import React, {useMemo, useEffect} from 'react';
import {
  ScrollView,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {useMeasurements} from './contexts/MeasurementsContext';
import {useAnimatedValue} from './contexts/AnimatedValueContext';
import {useHasReachedTransitionPoint} from './contexts/HasReachedTransitionPoint.tsx';

interface ScrollerProps extends React.ComponentProps<typeof ScrollView> {
  beforeTransitionPoint?: () => void;
  afterTransitionPoint?: () => void;
}

const Scroller: React.FC<ScrollerProps> = props => {
  const {onScroll, beforeTransitionPoint, afterTransitionPoint} = props;

  const {transitionPoint} = useMeasurements();
  const animatedValue = useAnimatedValue();
  const {hasReachedTransitionPoint, setHasReachedTransitionPoint} =
    useHasReachedTransitionPoint();

  const listener = useMemo(() => {
    return (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (onScroll !== undefined) {
        onScroll(event);
      }
      if (transitionPoint > 0) {
        const {y} = event.nativeEvent.contentOffset;
        setHasReachedTransitionPoint(y > transitionPoint);
      }
    };
  }, [onScroll, transitionPoint, setHasReachedTransitionPoint]);

  useEffect(() => {
    if (hasReachedTransitionPoint && afterTransitionPoint) {
      afterTransitionPoint();
    }
    if (!hasReachedTransitionPoint && beforeTransitionPoint) {
      beforeTransitionPoint();
    }
  }, [hasReachedTransitionPoint, beforeTransitionPoint, afterTransitionPoint]);

  const onScrollHandler = useMemo(
    () =>
      Animated.event([{nativeEvent: {contentOffset: {y: animatedValue}}}], {
        listener,
        useNativeDriver: true,
      }),
    [animatedValue, listener],
  );

  return (
    /*@ts-ignore*/
    <Animated.ScrollView
      scrollEventThrottle={1}
      {...props}
      onScroll={onScrollHandler}
    />
  );
};

export default Scroller;
