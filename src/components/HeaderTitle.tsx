import * as React from 'react';
import {Animated, View} from 'react-native';

type HeaderTitleProps = {
  title?: string;
  children?: React.ReactNode;
  style?: object;
  titleStyle?: object;
  containerStyle?: object;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  children,
  style,
  titleStyle,
  containerStyle,
}) => (
  <View
    style={[{flex: 1, justifyContent: 'flex-end', padding: 15}, containerStyle]}
    pointerEvents="box-none">
    <Animated.Text
      style={[
        {
          fontWeight: 'bold',
          fontSize: 36,
          color: 'black',
        },
        style,
        titleStyle,
      ]}>
      {children || title}
    </Animated.Text>
  </View>
);

export default HeaderTitle;
