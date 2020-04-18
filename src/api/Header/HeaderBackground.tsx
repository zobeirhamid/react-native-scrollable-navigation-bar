import React from 'react';
import {Animated, View} from 'react-native';
import {scaleable, disappear} from '../hoc';
import Context from '../Context';

type HeaderBackgroundProps = {
  backgroundColor?: string;
  children?: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  fadeOut: false,
  parallax: 0,
};

const HeaderBackground = (props: HeaderBackgroundProps) => {
  const {backgroundColor, children, fadeOut, parallax} = props;
  const {headerHeight, navigationBarHeight, animatedValue} = React.useContext(
    Context,
  );

  return (
    <View style={{backgroundColor}}>
      <Animated.View
        style={{
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, parallax],
              }),
            },
          ],
        }}>
        {disappear(
          scaleable(
            <Animated.View
              style={{
                height: headerHeight,
                backgroundColor,
              }}>
              {children}
            </Animated.View>,
            animatedValue,
          ),
          animatedValue,
          0,
          headerHeight - (navigationBarHeight + 30),
          fadeOut,
        )}
      </Animated.View>
    </View>
  );
};

HeaderBackground.defaultProps = defaultProps;

export default HeaderBackground;
