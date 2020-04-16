import { Platform, StatusBar, Dimensions } from 'react-native';

if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
}

function isIphoneX() {
  const { width, height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || height === 896 || width === 896)
  );
}

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios'
    ? isIphoneX()
      ? 44
      : 20
    : StatusBar.currentHeight || 0;

export const NAVIGATION_BAR_HEIGHT = 60 + STATUS_BAR_HEIGHT;

export default {
  STATUS_BAR_HEIGHT,
  NAVIGATION_BAR_HEIGHT,
};
