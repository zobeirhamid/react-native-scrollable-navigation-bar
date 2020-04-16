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
};

const defaultProps = {
  ScrollComponent: Animated.ScrollView,
  navigationBarHeight: NAVIGATION_BAR_HEIGHT,
  transitionPoint: NAVIGATION_BAR_HEIGHT,
  headerHeight: 0,
  snapHeight: 0,
};

const Container = (props: ContainerProps & typeof defaultProps) => {
  const {children, navigationBarHeight, transitionPoint, snapHeight} = props;

  let {animatedValue, headerHeight} = props;

  headerHeight =
    (transitionPoint !== navigationBarHeight && headerHeight) ||
    transitionPoint - snapHeight;

  if (animatedValue === undefined) {
    animatedValue = React.useRef(new Animated.Value(0)).current;
  }

  return (
    <Context.Provider
      value={{
        transitionPoint,
        navigationBarHeight,
        headerHeight,
        animatedValue,
      }}>
      {children}
    </Context.Provider>
  );
};

Container.defaultProps = defaultProps;

export default Container;
