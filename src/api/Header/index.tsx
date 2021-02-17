import React, { Component } from "react";
import { Animated, StyleSheet } from "react-native";
import HeaderBackground from "./HeaderBackground";
import HeaderBorder from "./HeaderBorder";
import HeaderForeground from "./HeaderForeground";
import HeaderNavigationBar from "./HeaderNavigationBar";
import Context, { ScrollableNavigationBarContextType } from "../Context";
import { formatInterpolate } from "../hoc";

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
  scale?: number;
  scrollOffset?: number;
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
  scrollOffset: 0,
};

const Header = ({
  snapHeight,
  backgroundColor,
  borderColor,
  headerBorderColor,
  fadeOut,
  parallax,
  scale,
  scrollOffset,
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
    componentHeight,
    offset,
  } = React.useContext(Context);

  const translateY = React.useMemo(() => {
    return snapHeight
      ? animatedValue.interpolate(
          formatInterpolate({
            inputRange: [
              -1,
              0,
              scrollOffset + snapHeight,
              scrollOffset + snapHeight + 1,
            ],
            outputRange: [1, 0, 0, -1],
          })
        )
      : animatedValue.interpolate(
          formatInterpolate({
            inputRange: [
              0,
              offset,
              offset + scrollOffset,
              offset + scrollOffset + 1,
            ],
            outputRange: [0, -offset, -offset, -offset - 1],
          })
        );
  }, [snapHeight, scrollOffset, offset]);

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
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: headerHeight,
            transform: [
              {
                translateY,
                // translateY: Animated.multiply(animatedValue, -1),
              },
            ],
          },
          style,
        ]}
      >
        <HeaderBackground
          parallax={parallax}
          scale={scale}
          backgroundColor={backgroundColor}
          fadeOut={fadeOut}
          scrollOffset={scrollOffset}
        >
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
