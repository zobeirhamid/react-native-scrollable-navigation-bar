import * as React from 'react';
import {Animated} from 'react-native';
import {NAVIGATION_BAR_HEIGHT} from '../constants';
import EventHandler, {EventHandlerType} from '../EventHandler';

export type ScrollableNavigationBarContextType = {
  transitionPoint: number;
  navigationBarHeight: number;
  headerHeight: number;
  componentHeight: number;
  animatedValue: Animated.Value;
};

export const ScrollableNavigationBarContext = React.createContext<
  ScrollableNavigationBarContextType
>({
  transitionPoint: NAVIGATION_BAR_HEIGHT,
  navigationBarHeight: NAVIGATION_BAR_HEIGHT,
  headerHeight: NAVIGATION_BAR_HEIGHT,
  componentHeight: NAVIGATION_BAR_HEIGHT,
  animatedValue: new Animated.Value(0),
});

export type ReachedTransitionPointContextType = {
  hasReachedTransitionPoint: boolean;
  containerEvents: EventHandlerType<any>;
};

export const ReachedTransitionPointContext = React.createContext<
  ReachedTransitionPointContextType
>({
  hasReachedTransitionPoint: false,
  containerEvents: EventHandler(),
});

export default ScrollableNavigationBarContext;
