import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigationBarIcon from './NavigationBarIcon';

export type BackButtonProps = {
  onPress?: () => {};
  style?: object;
  modal?: boolean;
};

const defaultProps = {visible: true};

const BackButton = ({
  onPress,
  style,
  visible,
  modal,
}: BackButtonProps & defaultProps) => {
  if (!visible) return null;
  return (
    // @ts-ignore
    <NavigationBarIcon
      name={modal ? 'ios-arrow-down' : 'ios-arrow-back'}
      style={style}
      onPress={onPress}
    />
  );
};

BackButton.defaultProps = defaultProps;

export default BackButton;
