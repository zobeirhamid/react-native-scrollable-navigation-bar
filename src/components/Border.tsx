import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import Transitioner from '../Transitioner';
import { useMeasurements } from '../contexts/MeasurementsContext';

interface BorderProps {
  navigationBorderColor?: string;
  headerBorderColor?: string;
}

const Border: React.FC<BorderProps> = ({
  navigationBorderColor,
  headerBorderColor,
}) => {
  const { borderHeight, stickyHeight } = useMeasurements();
  return (
    <>
      <Animated.View style={{ height: borderHeight }}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: headerBorderColor,
          }}
        />
        <Transitioner
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: navigationBorderColor,
          }}
          offset={-20 - stickyHeight}
          distance={10}
        />
      </Animated.View>
    </>
  );
};

export default Border;
