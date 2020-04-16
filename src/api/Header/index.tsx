import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import HeaderBackground from './HeaderBackground';
import HeaderBorder from './HeaderBorder';
import HeaderForeground from './HeaderForeground';
import HeaderNavigationBar from './HeaderNavigationBar';
import Context, {ScrollableNavigationBarContextType} from '../Context';

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

const Header = ({
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
}: HeaderProps & typeof defaultProps) => {
  const {
    animatedValue,
    transitionPoint,
    headerHeight,
    navigationBarHeight,
  } = React.useContext(Context);

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
                translateY: snapHeight
                  ? animatedValue.interpolate({
                      inputRange: [0, snapHeight],
                      outputRange: [0, snapHeight],
                      extrapolate: 'clamp',
                    })
                  : 0,
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
