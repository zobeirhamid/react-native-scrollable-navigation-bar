import React from 'react';
import Animated from 'react-native-reanimated';
import HeaderBackground from './HeaderBackground';
import HeaderBorder from './HeaderBorder';
import HeaderForeground from './HeaderForeground';
import HeaderNavigationBar from './HeaderNavigationBar';
import {ScrollableNavigationBarContextType, useContainer} from '../Context';

type ForegroundComponentProps = {
  title?: string;
  titleStyle?: object;
} & ScrollableNavigationBarContextType;

export type HeaderProps = {
  snapHeight?: number;
  backgroundColor?: string;
  borderColor?: string;
  headerBorderColor?: string;
  fadeOut?: boolean;
  parallax?: number;
  title?: string;
  titleStyle?: object;
  style?: object;
  collapsible?: boolean;
  stayCollapsed?: boolean;
  UnscrolledNavigationBar?: React.FC;
  ScrolledNavigationBar?: React.FC;
  BackgroundComponent?: React.FC<ScrollableNavigationBarContextType>;
  ForegroundComponent?: React.FC<ForegroundComponentProps>;
};

const defaultProps = {
  NavigationBarComponent: HeaderNavigationBar,
};

const Header = (props: HeaderProps & typeof defaultProps) => {
  const {
    snapHeight,
    backgroundColor,
    borderColor,
    headerBorderColor,
    fadeOut,
    parallax,
    title,
    titleStyle,
    style,
    NavigationBarComponent,
    UnscrolledNavigationBar,
    ScrolledNavigationBar,
    BackgroundComponent,
    ForegroundComponent,
    collapsible,
    stayCollapsed,
  } = props;
  const {
    animatedValue,
    transitionPoint,
    headerHeight,
    navigationBarHeight,
    componentHeight,
  } = useContainer(props);

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
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: headerHeight,
            transform: [
              {
                // translateY: Animated.multiply(animatedValue, -1),
                translateY: snapHeight
                  ? animatedValue.interpolate({
                      inputRange: [-1, 0, snapHeight, snapHeight + 1],
                      outputRange: [1, 0, 0, -1],
                    })
                  : Animated.multiply(animatedValue, -1),
              },
            ],
          },
          style,
        ]}>
        <HeaderBackground
          parallax={parallax}
          backgroundColor={backgroundColor}
          fadeOut={fadeOut}>
          {BackgroundComponent !== undefined && (
            <BackgroundComponent
              transitionPoint={transitionPoint}
              animatedValue={animatedValue}
              navigationBarHeight={navigationBarHeight}
              headerHeight={headerHeight}
              componentHeight={componentHeight}
            />
          )}
        </HeaderBackground>
        <HeaderForeground>
          {ForegroundComponent !== undefined && (
            <ForegroundComponent
              title={title}
              titleStyle={titleStyle}
              transitionPoint={transitionPoint}
              animatedValue={animatedValue}
              navigationBarHeight={navigationBarHeight}
              headerHeight={headerHeight}
              componentHeight={componentHeight}
            />
          )}
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
};

Header.defaultProps = defaultProps;

export default Header;
