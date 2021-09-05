import React from 'react';
import {BoxProps as BoxThemeProps, createBox} from '@shopify/restyle';
import {Theme} from 'resources/themes/theme';
import Animated from 'react-native-reanimated';
import {View as ReactNativeView} from 'react-native';

const Box = createBox<Theme>();

interface ReactNativeViewProps
  extends React.ComponentProps<typeof ReactNativeView> {
  children?: React.ReactNode;
}

export type BoxProps = ReactNativeViewProps & BoxThemeProps<Theme>;

export default Animated.createAnimatedComponent(Box);
