// @flow
import * as React from 'react';
import { Animated } from 'react-native';
import HeaderNavigationBar from './HeaderNavigationBar';
import { NAVIGATION_BAR_HEIGHT } from '../../constants';
import HeaderTitle from '../../components/HeaderTitle';
import HeaderBackground from './HeaderBackground';
import HeaderBorder from './HeaderBorder';
import HeaderForeground from './HeaderForeground';
import Snap from '../Snap';
import { ContextConsumer } from '../Context';
import type { HeaderProps, HeaderDefaultProps } from '../../types';

class Header extends React.Component<HeaderProps> {
  static defaultProps: HeaderDefaultProps = {
    snapHeight: 0,
    NavigationBarComponent: HeaderNavigationBar,
    ForegroundComponent: ({ title, titleStyle }) => (
      <HeaderTitle style={titleStyle}>{title}</HeaderTitle>
    ),
    BackgroundComponent: () => null,
    UnscrolledNavigationBar: () => null,
    ScrolledNavigationBar: () => null,
    transitionPoint: NAVIGATION_BAR_HEIGHT,
    navigationBarHeight: NAVIGATION_BAR_HEIGHT,
    headerHeight: 0,
    SnapComponent: () => null
  };

  render() {
    const {
      snapHeight,
      backgroundColor,
      borderColor,
      fadeOut,
      parallax,
      NavigationBarComponent,
      UnscrolledNavigationBar,
      ScrolledNavigationBar,
      BackgroundComponent,
      title,
      titleStyle,
      collapsible,
      ForegroundComponent,
      style,
      animatedValue,
      transitionPoint,
      navigationBarHeight,
      headerHeight,
      stayCollapsed,
      SnapComponent
    } = this.props;

    return (
      <React.Fragment>
        <NavigationBarComponent
          collapsible={collapsible}
          stayCollapsed={stayCollapsed}
          backgroundColor={backgroundColor}
          UnscrolledNavigationBar={UnscrolledNavigationBar}
          ScrolledNavigationBar={ScrolledNavigationBar}
        />
        <Animated.View
          pointerEvents="box-none"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: [{ translateY: Animated.multiply(animatedValue, -1) }]
          }}
        >
          <Animated.View
            style={[
              {
                transform: [
                  {
                    translateY:
                      snapHeight === 0
                        ? 0
                        : animatedValue.interpolate({
                            inputRange: [0, snapHeight],
                            outputRange: [0, snapHeight],
                            extrapolate: 'clamp'
                          })
                  }
                ]
              },
              style
            ]}
          >
            <HeaderBackground
              parallax={parallax}
              backgroundColor={backgroundColor}
              fadeOut={fadeOut}
            >
              <BackgroundComponent
                transitionPoint={transitionPoint}
                animatedValue={animatedValue}
                navigationBarHeight={navigationBarHeight}
                headerHeight={headerHeight}
              />
            </HeaderBackground>
            <HeaderForeground>
              <ForegroundComponent
                title={title}
                titleStyle={titleStyle}
                transitionPoint={transitionPoint}
                animatedValue={animatedValue}
                navigationBarHeight={navigationBarHeight}
                headerHeight={headerHeight}
              />
            </HeaderForeground>
          </Animated.View>
        </Animated.View>
        <Snap snapHeight={snapHeight} backgroundColor={backgroundColor}>
          <SnapComponent />
        </Snap>
        <HeaderBorder
          borderColor={borderColor}
          collapsible={collapsible}
          stayCollapsed={stayCollapsed}
        />
      </React.Fragment>
    );
  }
}

export default ContextConsumer(Header);
