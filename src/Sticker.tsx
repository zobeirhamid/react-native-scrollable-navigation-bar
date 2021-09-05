import React, { useMemo } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useMeasurements } from './contexts/MeasurementsContext';
import Collapser from './Collapser';
import { useAnimatedValue } from './contexts/AnimatedValueContext';

interface StickerProps {
  collapsible?: boolean;
  stickyCollapsible?: boolean;
  stayCollapsed?: boolean;
  stickyStayCollapsed?: boolean;
  height?: number;
}

const Sticker: React.FC<StickerProps> = (props) => {
  const {
    navigationBarHeight,
    headerHeight,
    stickyHeight,
    statusBarHeight,
    snapHeight,
  } = useMeasurements();
  const animatedValue = useAnimatedValue();

  const {
    children,
    collapsible = false,
    stickyCollapsible = false,
    stayCollapsed = false,
    stickyStayCollapsed = false,
    height = stickyHeight,
  } = props;

  const translateY = useMemo(() => {
    if (headerHeight !== navigationBarHeight) {
      return animatedValue.interpolate({
        inputRange: [0, headerHeight - navigationBarHeight - statusBarHeight],
        outputRange: [headerHeight - statusBarHeight, navigationBarHeight],
        extrapolateRight: 'clamp',
      });
    }
    if (snapHeight !== 0) {
      return animatedValue.interpolate({
        inputRange: [0, snapHeight],
        outputRange: [navigationBarHeight + snapHeight, navigationBarHeight],
        extrapolate: 'clamp',
      });
    }
    return navigationBarHeight + snapHeight;
  }, [
    navigationBarHeight,
    headerHeight,
    statusBarHeight,
    animatedValue,
    snapHeight,
  ]);

  const collapsibleOffset = useMemo(() => {
    if (stayCollapsed) {
      return headerHeight;
    }
    if (collapsible || headerHeight === navigationBarHeight) {
      return 0;
    }
    return headerHeight - navigationBarHeight - statusBarHeight;
  }, [
    stayCollapsed,
    headerHeight,
    collapsible,
    navigationBarHeight,
    statusBarHeight,
  ]);

  const active = useMemo(() => {
    return (!collapsible || stayCollapsed) && stickyCollapsible;
  }, [collapsible, stayCollapsed, stickyCollapsible]);

  const style = useMemo(() => {
    return {
      ...StyleSheet.absoluteFillObject,
      transform: [
        {
          translateY,
        },
      ],
    };
  }, [translateY]);

  return (
    <>
      <Animated.View style={style} pointerEvents={'box-none'}>
        <Collapser
          active={active}
          stayCollapsed={stickyStayCollapsed}
          offset={collapsibleOffset}
          distance={height}
        >
          {children}
        </Collapser>
      </Animated.View>
    </>
  );
};

export default Sticker;
