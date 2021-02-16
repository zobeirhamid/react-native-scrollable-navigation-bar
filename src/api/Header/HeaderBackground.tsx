import React from "react";
import { Animated, View } from "react-native";
import { scaleable, disappear } from "../hoc";
import Context from "../Context";
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";

type HeaderBackgroundProps = {
  backgroundColor?: string;
  children?: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  fadeOut: false,
  parallax: 0,
  scale: 1.3,
  offset: 0,
};

const HeaderBackground = (props: HeaderBackgroundProps) => {
  const { backgroundColor, children, fadeOut, parallax, scale, offset } = props;
  const { headerHeight, navigationBarHeight, animatedValue } = React.useContext(
    Context
  );

  return (
    <View style={{ backgroundColor }}>
      <Animated.View
        style={{
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: offset !== 0 ? [0, offset, offset + 1] : [0, 1],
                outputRange: offset !== 0 ? [0, 0, parallax] : [0, parallax],
              }),
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
