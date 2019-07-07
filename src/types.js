// @flow
import * as React from 'react';
import { Animated } from 'react-native';
import { type IconProps } from 'react-native-vector-icons';

export type StatusBarComponentProps = {
  backgroundColor?: string
};

export type ContainerDefaultProps = {|
  ScrollComponent: React.ComponentType<Animated.ScrollView>,
  headerHeight: number,
  navigationBarHeight: number,
  transitionPoint: number,
  Header: React.AbstractComponent<
    React.Config<HeaderProps, HeaderDefaultProps>
  >,
  StatusBar: React.ComponentType<StatusBarComponentProps>
|};

export type ContainerProps = {|
  ...ContainerDefaultProps,
  children?: React.Node,
  animatedValue?: Animated.Value,
  afterTransitionPoint?: () => void,
  beforeTransitionPoint?: () => void,
  style?: any,
  scrollEnabled?: boolean
|};

export type ContainerState = {
  reachedTransitionPoint: boolean,
  position: number
};

export type EventHandlerType<T: mixed> = {
  listen: ((T) => void) => void,
  fire: T => void
};

export type HeaderTitleProps = {
  children?: string,
  style?: mixed
};

export type NavigationBarTitleProps = {
  children?: string,
  titleStyle?: mixed
};

export type NavigationBarIconProps = {
  name: string,
  size?: number,
  style?: mixed,
  onPress?: Function,
  IconProvider: React.ComponentType<IconProps<any>>
};

export type NavigationBarDefaultProps = {|
  navigationBarHeight: number,
  BackButton: ?React.ComponentType<any>,
  leftIcons: ?(React.Element<React.ComponentType<NavigationBarIconProps>>[]),
  rightIcons: ?(React.Element<React.ComponentType<NavigationBarIconProps>>[])
|};

export type NavigationBarProps = {
  ...NavigationBarDefaultProps,
  title?: string,
  titleStyle?: mixed,
  backgroundColor?: ?string,
  style?: mixed,
  borderColor?: string
};

export type BackButtonProps = {
  onPress?: Function,
  style?: mixed,
  visible?: boolean
};

export type StickyProps = {
  animatedValue: Animated.Value,
  transitionPoint: number,
  navigationBarHeight: number,
  collapsible?: boolean,
  stayCollapsed?: boolean,
  children?: React.Node,
  style?: mixed
};

export type SnapProps = {
  children?: React.Node,
  snapHeight: number,
  animatedValue: Animated.Value
};

export type SearchContainerState = {
  searchActive: boolean
};

export type NavigationBarContainerProps = {
  backgroundColor?: string,
  style?: mixed,
  children?: React.Node,
  collapsible?: boolean,
  stayCollapsed?: boolean,
  navigationBarHeight?: number,
  translucent?: boolean,
  animatedValue: Animated.Value,
  pointerEvents?: string
};

export type CollapsibleProps = {
  navigationBarHeight: number,
  transitionPoint: number,
  animatedValue: Animated.Value,
  children?: React.Node,
  style?: mixed,
  active?: boolean,
  stayCollapsed?: boolean
};

export type ForegroundProps = {
  title?: string,
  titleStyle?: mixed,
  animatedValue: Animated.Value
};

export type BackgroundProps = {
  animatedValue: Animated.Value
};

export type HeaderDefaultProps = {|
  snapHeight: number,
  NavigationBarComponent: React.AbstractComponent<
    React.Config<HeaderNavigationBarProps, HeaderNavigationBarDefaultProps>
  >,
  ForegroundComponent: React.ComponentType<ForegroundProps>,
  BackgroundComponent: React.ComponentType<BackgroundProps>,
  UnscrolledNavigationBar: React.ComponentType<{}>,
  ScrolledNavigationBar: React.ComponentType<{}>,
  transitionPoint: number,
  navigationBarHeight: number,
  headerHeight: number
|};

export type HeaderProps = {
  ...HeaderDefaultProps,
  animatedValue: Animated.Value,
  backgroundColor?: string,
  borderColor?: string,
  fadeOut?: boolean,
  parallax?: number,
  title?: string,
  titleStyle?: mixed,
  style?: mixed,
  collapsible?: boolean,
  stayCollapsed?: boolean
};

export type HeaderNavigationBarDefaultProps = {|
  navigationBarHeight: number,
  transitionPoint: number,
  animatedValue: Animated.Value
|};

export type HeaderNavigationBarProps = {
  ...HeaderNavigationBarDefaultProps,
  backgroundColor?: string,
  UnscrolledNavigationBar: React.ComponentType<{}>,
  ScrolledNavigationBar: React.ComponentType<{}>,
  collapsible?: boolean,
  stayCollapsed?: boolean,
  containerEvents?: EventHandlerType<ContainerState>
};

export type HeaderForegroundDefaultProps = {
  headerHeight: number
};

export type HeaderForegroundProps = {
  ...HeaderForegroundDefaultProps,
  children?: React.Node
};

export type HeaderBorderProps = {
  borderColor?: string,
  collapsible?: boolean,
  stayCollapsed?: boolean
};

export type HeaderBackgroundDefaultProps = {|
  navigationBarHeight: number,
  headerHeight: number,
  fadeOut: boolean,
  parallax: number
|};

export type HeaderBackgroundProps = {
  children?: React.Node,
  animatedValue: Animated.Value,
  backgroundColor?: string,
  ...HeaderBackgroundDefaultProps
};
