import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import Transitioner from './Transitioner';
import {useMeasurements} from './contexts/MeasurementsContext';

interface StatusBarContainerProps {
  transition?: boolean;
  StatusBarComponent?: React.ComponentType<any>;
  UnscrolledStatusBarComponent?: React.ComponentType<any>;
}

const StatusBarContainer: React.FC<StatusBarContainerProps> = props => {
  const {statusBarHeight} = useMeasurements();
  const {
    StatusBarComponent = () => null,
    UnscrolledStatusBarComponent = () => null,
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
      <UnscrolledStatusBarComponent />

      <Transitioner style={statusBarStyle}>
        <StatusBarComponent />
      </Transitioner>
    </View>
  );
};

export default StatusBarContainer;
