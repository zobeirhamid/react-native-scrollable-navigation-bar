import React, { useMemo } from 'react';
import {
  View,
  StatusBar as RNStatusBar,
  StatusBarPropsIOS,
  StatusBarPropsAndroid,
} from 'react-native';
import { useMeasurements } from '../contexts/MeasurementsContext';

export type StatusBarProps = StatusBarPropsIOS & StatusBarPropsAndroid;

const StatusBar: React.FC<StatusBarProps> = (props) => {
  const { statusBarHeight } = useMeasurements();
  const { backgroundColor = 'transparent' } = props;

  const style = useMemo(() => {
    return {
      height: statusBarHeight,
      backgroundColor,
    };
  }, [statusBarHeight, backgroundColor]);

  return (
    <>
      <RNStatusBar
        {...props}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <View style={style} />
    </>
  );
};

export default StatusBar;
