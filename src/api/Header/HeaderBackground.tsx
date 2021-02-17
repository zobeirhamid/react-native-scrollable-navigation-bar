import React, { useMemo } from "react";
import { Animated, View } from "react-native";
import { scaleable, disappear } from "../hoc";
import Context from "../Context";
import { formatInterpolate } from "../hoc";

type HeaderBackgroundProps = {
  backgroundColor?: string;
  children?: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  fadeOut: false,
  parallax: 0,
  scale: 1.3,
  scrollOffset: 0,
};

const HeaderBackground = (props: HeaderBackgroundProps) => {
  const {
    backgroundColor,
    children,
    fadeOut,
    parallax,
    scale,
    scrollOffset,
  } = props;
  const {
    headerHeight,
    navigationBarHeight,
    animatedValue,
    offset,
  } = React.useContext(Context);

  const translateY = useMemo(() => {
    return animatedValue.interpolate(
      formatInterpolate({
        inputRange: [
          0,
          offset,
          offset + scrollOffset,
          offset + scrollOffset + 1,
        ],
        outputRange: [0, 0, 0, parallax],
      })
    );
  }, [scrollOffset, offset, parallax]);

  return (
    <View style={{ backgroundColor }}>
      <Animated.View
        style={{
          transform: [
            {
              translateY,
            },
          ],
        }}
      >
        {disappear(
          scaleable(
            scale,
            <Animated.View
              style={{
                height: headerHeight,
                backgroundColor,
              }}
            >
              {children}
            </Animated.View>,
            animatedValue
          ),
          animatedValue,
          0,
          headerHeight - (navigationBarHeight + 30),
          fadeOut
        )}
      </Animated.View>
    </View>
  );
};

HeaderBackground.defaultProps = defaultProps;

export default HeaderBackground;
