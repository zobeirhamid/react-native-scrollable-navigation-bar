// @flow
import * as React from 'react';
import { Animated } from 'react-native';
import HeaderNavigationBar from './HeaderNavigationBar';
import { NAVIGATION_BAR_HEIGHT } from '../../constants';
import HeaderTitle from '../../components/HeaderTitle';
import HeaderBackground from './HeaderBackground';
import HeaderBorder from './HeaderBorder';
import HeaderForeground from './HeaderForeground';
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
    headerHeight: 0
  };

  render() {
    const {
      snapHeight,
      backgroundColor,
      borderColor,
      headerBorderColor,
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
      stayCollapsed
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
        <HeaderBorder
          borderColor={borderColor}
          headerBorderColor={headerBorderColor}
          collapsible={collapsible}
          stayCollapsed={stayCollapsed}
        />
      </React.Fragment>
    );
  }
}

export default ContextConsumer(Header);
