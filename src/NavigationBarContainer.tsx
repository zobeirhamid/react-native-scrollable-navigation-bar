import React, { useMemo } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useMeasurements } from './contexts/MeasurementsContext';
import Collapser from './Collapser';
import Snapper from './Snapper';
import Sticker from './Sticker';
import Transitioner from './Transitioner';

interface NavigationBarContainerProps {
  NavigationBarComponent?: React.ComponentType<any>;
  UnscrolledNavigationBarComponent?: React.ComponentType<any>;
  StickyComponent?: React.ComponentType<any>;
  SnapComponent?: React.ComponentType<any>;
  BorderComponent?: React.ComponentType<any>;
  collapsible?: boolean;
  stickyCollapsible?: boolean;
  stayCollapsed?: boolean;
  stickyStayCollapsed?: boolean;
}

const NavigationBarContainer: React.FC<NavigationBarContainerProps> = (
  props
) => {
  const {
    navigationBarHeight,
    statusBarHeight,
    headerHeight,
    stickyHeight,
    snapHeight,
    borderHeight,
  } = useMeasurements();

  const {
    NavigationBarComponent = () => null,
    UnscrolledNavigationBarComponent = () => null,
    StickyComponent = () => null,
    SnapComponent = () => null,
    BorderComponent = () => null,
    collapsible = false,
    stickyCollapsible = false,
    stayCollapsed = false,
    stickyStayCollapsed = false,
  } = props;

  const offset = useMemo(() => {
    if (headerHeight !== navigationBarHeight) {
      return headerHeight - navigationBarHeight - statusBarHeight;
    }
    return snapHeight;
  }, [headerHeight, navigationBarHeight, statusBarHeight, snapHeight]);

  const distance = useMemo(() => {
    if (stickyCollapsible && !stayCollapsed) {
      return navigationBarHeight + stickyHeight + borderHeight;
    }
    return navigationBarHeight;
  }, [
    stickyCollapsible,
    stayCollapsed,
    navigationBarHeight,
    stickyHeight,
    borderHeight,
  ]);

  const style = useMemo(() => {
    return {
      ...StyleSheet.absoluteFillObject,
      height: headerHeight + snapHeight + borderHeight + stickyHeight,
      top: statusBarHeight,
      zIndex: 1,
    };
  }, [statusBarHeight, headerHeight, snapHeight, borderHeight, stickyHeight]);

  const navigationBarStyle = useMemo(() => {
    return {
      ...StyleSheet.absoluteFillObject,
      height: navigationBarHeight,
    };
  }, [navigationBarHeight]);

  return (
    <>
      <Animated.View style={style} pointerEvents={'box-none'}>
        <Snapper>
          <SnapComponent />
        </Snapper>
        <Collapser
          active={collapsible}
          stayCollapsed={stayCollapsed}
          distance={distance}
          height={navigationBarHeight + stickyHeight + borderHeight}
          offset={offset}
        >
          <Sticker
            collapsible={collapsible}
            stayCollapsed={stayCollapsed}
            stickyCollapsible={stickyCollapsible}
            stickyStayCollapsed={stickyStayCollapsed}
            height={stickyHeight}
          >
            <StickyComponent />
            <BorderComponent />
          </Sticker>
          <Animated.View style={{ height: navigationBarHeight }}>
            <UnscrolledNavigationBarComponent />
            <Transitioner style={navigationBarStyle}>
              <NavigationBarComponent />
            </Transitioner>
          </Animated.View>
        </Collapser>
      </Animated.View>
    </>
  );
};

export default NavigationBarContainer;
