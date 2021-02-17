import * as React from 'react';
import {Animated} from 'react-native';
import {NAVIGATION_BAR_HEIGHT} from '../constants';
import Context from './Context';

export type ContainerProps = {
  children?: React.ReactNode;
  headerHeight?: number;
  navigationBarHeight?: number;
  transitionPoint?: number;
  animatedValue?: Animated.Value;
  snapHeight?: number;
  stickyHeight?: number;
  offset?: number;
};

const defaultProps = {
  ScrollComponent: Animated.ScrollView,
  navigationBarHeight: NAVIGATION_BAR_HEIGHT,
  transitionPoint: NAVIGATION_BAR_HEIGHT,
  headerHeight: 0,
  snapHeight: 0,
  stickyHeight: 0,
  offset: 0,
};

const Container = (props: ContainerProps & typeof defaultProps) => {
  const {
    children,
    navigationBarHeight,
    transitionPoint,
    snapHeight,
    stickyHeight,
    offset,
  } = props;

  let {animatedValue, headerHeight} = props;

  headerHeight =
    (transitionPoint !== navigationBarHeight && headerHeight) ||
    transitionPoint;

  if (animatedValue === undefined) {
    animatedValue = React.useRef(new Animated.Value(offset)).current;
  }

  return (
    <Context.Provider
      value={{
        transitionPoint: transitionPoint + offset,
        navigationBarHeight,
        headerHeight,
        animatedValue,
        offset,
        componentHeight: headerHeight + stickyHeight + snapHeight + offset,
      }}>
      {children}
    </Context.Provider>
  );
};

Container.defaultProps = defaultProps;

export default Container;
