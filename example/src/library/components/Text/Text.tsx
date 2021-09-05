import React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {createText, TextProps as TextThemeProps} from '@shopify/restyle';
import {Theme} from 'resources/themes/theme';
import Animated from 'react-native-reanimated';

const Text = createText<Theme>();

interface ReactNativeTextProps
  extends React.ComponentProps<typeof ReactNativeText> {
  children?: React.ReactNode;
}

export type TextProps = ReactNativeTextProps & TextThemeProps<Theme>;

export default Animated.createAnimatedComponent(Text);
