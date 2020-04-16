import * as React from "react";
import { Animated, View } from "react-native";
import NavigationBarTitle from "./NavigationBarTitle";
import { STATUS_BAR_HEIGHT, NAVIGATION_BAR_HEIGHT } from "../../constants";

type NavigationBarProps = {
  title?: string;
  titleStyle?: object;
  backgroundColor?: string;
  style?: string;
  BackButton?: () => JSX.Element | null;
  leftIcons?: Array<React.ReactElement>;
  rightIcons?: Array<React.ReactElement>;
  borderColor?: string;
  iconStyle?: object;
};

const defaultProps = {
  navigationBarHeight: NAVIGATION_BAR_HEIGHT,
};

const NavigationBar = (props: NavigationBarProps & typeof defaultProps) => {
  const {
    title,
    titleStyle,
    backgroundColor,
    style,
    BackButton,
    leftIcons,
    rightIcons,
    navigationBarHeight,
    borderColor,
    iconStyle,
  } = props;

  return (
    <Animated.View
      style={[
        {
          backgroundColor,
          height: navigationBarHeight,
          flex: 1,
        },
        style,
      ]}
    >
      <View
        style={{
          paddingTop: STATUS_BAR_HEIGHT,
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          // paddingHorizontal: 10,
          paddingHorizontal: 15,
          borderBottomWidth: borderColor !== undefined ? 1 : 0,
          borderColor,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {BackButton !== undefined && <BackButton />}
          {leftIcons !== undefined &&
            React.Children.map(leftIcons, (element) => ({
              ...element,
              props: {
                ...element.props,
                style: [iconStyle, element.props.style],
              },
            }))}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          {rightIcons !== undefined &&
            React.Children.map(rightIcons, (element) => ({
              ...element,
              props: {
                ...element.props,
                style: [iconStyle, element.props.style],
              },
            }))}
        </View>
        <NavigationBarTitle titleStyle={titleStyle}>{title}</NavigationBarTitle>
      </View>
    </Animated.View>
  );
};

NavigationBar.defaultProps = defaultProps;

export default NavigationBar;
