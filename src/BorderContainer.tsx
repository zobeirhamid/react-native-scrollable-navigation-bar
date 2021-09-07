import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useMeasurements } from './contexts/MeasurementsContext';
import Transitioner from './Transitioner';

export interface BorderContainerProps {
  HeaderBorderComponent?: React.ComponentType<any>;
  BorderComponent?: React.ComponentType<any>;
  height?: number;
}

const BorderContainer: React.FC<BorderContainerProps> = ({
  HeaderBorderComponent = () => null,
  BorderComponent = () => null,
}) => {
  const { borderHeight } = useMeasurements();
  return (
    <>
      <Animated.View style={{ height: borderHeight }}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        >
          <HeaderBorderComponent />
        </Animated.View>
        <Transitioner
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        >
          <BorderComponent />
        </Transitioner>
      </Animated.View>
    </>
  );
};

export default BorderContainer;
