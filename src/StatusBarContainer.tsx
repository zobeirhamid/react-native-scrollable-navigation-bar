import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import Appearer from './Appearer';
import { useMeasurements } from './contexts/MeasurementsContext';

interface StatusBarContainerProps {
  transition?: boolean;
  StatusBarComponent?: React.ComponentType<any>;
  HeaderStatusBarComponent?: React.ComponentType<any>;
}

const StatusBarContainer: React.FC<StatusBarContainerProps> = (props) => {
  const { statusBarHeight } = useMeasurements();
  const {
    StatusBarComponent = () => null,
    HeaderStatusBarComponent = () => null,
  } = props;

  const statusBarStyle = useMemo(() => {
    return {
      ...StyleSheet.absoluteFillObject,
      height: statusBarHeight,
      zIndex: 1,
    };
  }, [statusBarHeight]);

  return (
    <View style={statusBarStyle}>
      <HeaderStatusBarComponent />

      <Appearer style={statusBarStyle}>
        <StatusBarComponent />
      </Appearer>
    </View>
  );
};

export default StatusBarContainer;
