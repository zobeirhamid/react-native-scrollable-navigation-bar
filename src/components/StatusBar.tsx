import React, { useMemo } from 'react';
import {
  View,
  StatusBar as RNStatusBar,
  StatusBarPropsIOS,
  StatusBarPropsAndroid,
} from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';

export type StatusBarProps = StatusBarPropsIOS &
  StatusBarPropsAndroid & {
    height?: number;
  };

const StatusBar: React.FC<StatusBarProps> = (props) => {
  const { backgroundColor = 'transparent', height = STATUS_BAR_HEIGHT } = props;

  const style = useMemo(() => {
    return {
      height,
      backgroundColor,
    };
  }, [backgroundColor, height]);

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
