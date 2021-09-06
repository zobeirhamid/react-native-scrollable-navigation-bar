import React from 'react';
import {
  ScrollView,
  Animated,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { NAVIGATION_BAR_HEIGHT, STATUS_BAR_HEIGHT } from './constants';
import { MeasurementsProvider } from './contexts/MeasurementsContext';
import { AnimatedValueProvider } from './contexts/AnimatedValueContext';
import HeaderContainer from './HeaderContainer';
import NavigationBarContainer from './NavigationBarContainer';
import Scroller from './Scroller';
import StatusBarContainer from './StatusBarContainer';
import { HasReachedTransitionPointProvider } from './contexts/HasReachedTransitionPoint.tsx';

export interface ContainerProps
  extends React.ComponentProps<typeof ScrollView> {
  animatedValue?: Animated.Value;
  statusBarHeight?: number;
  navigationBarHeight?: number;
  headerHeight?: number;
  transitionPoint?: number;
  stickyHeight?: number;
  snapHeight?: number;
  borderHeight?: number;
  StatusBarComponent?: React.ComponentType<any>;
  UnscrolledStatusBarComponent?: React.ComponentType<any>;
  NavigationBarComponent?: React.ComponentType<any>;
  UnscrolledNavigationBarComponent?: React.ComponentType<any>;
  StickyComponent?: React.ComponentType<any>;
  SnapComponent?: React.ComponentType<any>;
  BorderComponent?: React.ComponentType<any>;
  collapsible?: boolean;
  stickyCollapsible?: boolean;
  stayCollapsed?: boolean;
  stickyStayCollapsed?: boolean;
  HeaderForegroundComponent?: React.ComponentType<any>;
  HeaderBackgroundComponent?: React.ComponentType<any>;
  beforeTransitionPoint?: () => void;
  afterTransitionPoint?: () => void;
  scale?: number;
  parallax?: number;
  fadeOut?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  height?: number;
}

type ContainerState = {
  focused: boolean;
};

class Container extends React.PureComponent<ContainerProps, ContainerState> {
  state = {
    focused: false,
  };
  containerAnimatedValue = new Animated.Value(0);
  overlayAnimatedValue = new Animated.Value(0);
  containerStyle = [
    styles.container,
    {
      transform: [{ translateY: this.containerAnimatedValue }],
    },
  ];
  overlayStyle = {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
    opacity: this.overlayAnimatedValue,
    backgroundColor: 'black',
  };

  focus() {
    const {
      navigationBarHeight = NAVIGATION_BAR_HEIGHT,
      headerHeight = NAVIGATION_BAR_HEIGHT,
      snapHeight = 0,
      borderHeight = 0,
      statusBarHeight = STATUS_BAR_HEIGHT,
      onFocus = () => {},
    } = this.props;

    this.setState({ focused: true });
    onFocus();
    Animated.timing(this.containerAnimatedValue, {
      toValue:
        navigationBarHeight !== headerHeight
          ? -headerHeight + snapHeight + borderHeight + statusBarHeight
          : -navigationBarHeight,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(this.overlayAnimatedValue, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  blur() {
    const { onBlur = () => {} } = this.props;

    onBlur();
    Animated.timing(this.containerAnimatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(this.overlayAnimatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      this.setState({ focused: false });
    });
  }

  render() {
    const {
      animatedValue,
      statusBarHeight = STATUS_BAR_HEIGHT,
      navigationBarHeight = NAVIGATION_BAR_HEIGHT,
      headerHeight = NAVIGATION_BAR_HEIGHT,
      stickyHeight = 0,
      snapHeight = 0,
      transitionPoint = headerHeight - navigationBarHeight - statusBarHeight,
      borderHeight = 0,
      StatusBarComponent = () => null,
      UnscrolledStatusBarComponent = () => null,
      NavigationBarComponent = () => null,
      UnscrolledNavigationBarComponent = () => null,
      StickyComponent = () => null,
      SnapComponent = () => null,
      BorderComponent = () => null,
      collapsible = false,
      stickyCollapsible = false,
      stayCollapsed = false,
      stickyStayCollapsed = false,
      contentContainerStyle,
      children,
      HeaderForegroundComponent = () => null,
      HeaderBackgroundComponent = () => null,
      scale = 1.1,
      parallax = 0,
      fadeOut = false,
      height = Dimensions.get('window').height,
    } = this.props;

    const { focused } = this.state;

    const offset =
      navigationBarHeight === headerHeight
        ? navigationBarHeight +
          statusBarHeight +
          snapHeight +
          stickyHeight +
          borderHeight
        : stickyHeight + borderHeight;

    return (
      <View style={{ height }}>
        <AnimatedValueProvider animatedValue={animatedValue}>
          <MeasurementsProvider
            statusBarHeight={statusBarHeight}
            navigationBarHeight={navigationBarHeight}
            headerHeight={headerHeight}
            transitionPoint={transitionPoint}
            stickyHeight={stickyHeight}
            snapHeight={snapHeight}
            borderHeight={borderHeight}
          >
            <HasReachedTransitionPointProvider>
              <Animated.View
                style={[this.containerStyle, styles.navigationBarContainer]}
                pointerEvents={'box-none'}
              >
                <NavigationBarContainer
                  NavigationBarComponent={NavigationBarComponent}
                  UnscrolledNavigationBarComponent={
                    UnscrolledNavigationBarComponent
                  }
                  StickyComponent={StickyComponent}
                  SnapComponent={SnapComponent}
                  collapsible={collapsible}
                  stayCollapsed={stayCollapsed}
                  stickyCollapsible={stickyCollapsible}
                  stickyStayCollapsed={stickyStayCollapsed}
                  BorderComponent={BorderComponent}
                />
              </Animated.View>
              <Scroller scrollEnabled={!focused} {...this.props}>
                <Animated.View style={[this.containerStyle]}>
                  <HeaderContainer
                    HeaderForegroundComponent={HeaderForegroundComponent}
                    HeaderBackgroundComponent={HeaderBackgroundComponent}
                    scale={scale}
                    parallax={parallax}
                    fadeOut={fadeOut}
                  />
                  <View style={{ height: offset }} />
                  <View style={contentContainerStyle}>
                    <TouchableWithoutFeedback onPress={() => this.blur()}>
                      <Animated.View
                        style={this.overlayStyle}
                        pointerEvents={focused ? 'auto' : 'none'}
                      />
                    </TouchableWithoutFeedback>
                    {children}
                  </View>
                </Animated.View>
              </Scroller>
              <StatusBarContainer
                StatusBarComponent={StatusBarComponent}
                UnscrolledStatusBarComponent={UnscrolledStatusBarComponent}
              />
            </HasReachedTransitionPointProvider>
          </MeasurementsProvider>
        </AnimatedValueProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
  },

  navigationBarContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
  },
});

export default Container;
