import React from 'react';
import { Animated } from 'react-native';

export interface BorderProps {
  backgroundColor?: string;
  height?: number;
}

const Border: React.FC<BorderProps> = ({
  backgroundColor = 'transparent',
  height,
}) => {
  return (
    <>
      <Animated.View style={{ height, backgroundColor }} />
    </>
  );
};

export default Border;
