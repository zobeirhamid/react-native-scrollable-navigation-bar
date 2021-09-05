import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import Transitioner from '../Transitioner';
import {useMeasurements} from '../contexts/MeasurementsContext';

interface BorderProps {
  navigationBorderColor?: string;
  headerBorderColor?: string;
}

const Border: React.FC<BorderProps> = ({
  navigationBorderColor,
  headerBorderColor,
}) => {
  const {borderHeight} = useMeasurements();
  return (
    <>
      <Animated.View style={{height: borderHeight}}>
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
        />
      </Animated.View>
    </>
  );
};

export default Border;
