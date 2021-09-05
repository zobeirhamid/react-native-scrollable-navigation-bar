import React from 'react';
import { Animated, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';

export interface HeaderTitleProps {
  title?: string;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  titleStyle = {},
  containerStyle = {},
}) => {
  return (
    <>
      <Animated.View
        style={[styles.container, containerStyle]}
        pointerEvents={'none'}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
    zIndex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HeaderTitle;
