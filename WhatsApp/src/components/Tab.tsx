import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = ({
  children,
  active = false,
  width,
  onPress,
}: {
  children?: React.ReactNode;
  active?: boolean;
  width: number;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: active ? 1 : 0.5,
          height: 50,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Tab;
