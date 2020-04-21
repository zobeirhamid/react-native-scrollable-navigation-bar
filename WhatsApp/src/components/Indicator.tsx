import React from 'react';
import {View, Dimensions} from 'react-native';

import Animated, {Extrapolate} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const primaryColor = 'rgb(14, 94, 84)';

const iconWidth = (628 / 481) * 16 + 30;
const indicatorWidth = (width - iconWidth) / 3;

const Indicator = ({value}: {value: Animated.Value<number>}) => {
  const animatedWidth = value.interpolate({
    inputRange: [0, 1],
    outputRange: [iconWidth, indicatorWidth],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <View style={{height: 5, backgroundColor: primaryColor}}>
      <Animated.View
        //@ts-ignore
        style={{
          height: 5,
          width: animatedWidth,
          backgroundColor: 'white',
          transform: [
            {
              translateX: value.interpolate({
                inputRange: [0, 1, 2, 3],
                outputRange: [
                  0,
                  iconWidth,
                  iconWidth + indicatorWidth,
                  iconWidth + 2 * indicatorWidth,
                ],
                extrapolate: Extrapolate.CLAMP,
              }),
            },
          ],
        }}
      />
    </View>
  );
};

export default Indicator;
