import { Platform, StatusBar, Dimensions } from 'react-native';

if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
}

//https://github.com/ptelad/react-native-iphone-x-helper
function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926 ||
      dimen.height === 932 ||
      dimen.width === 932)
  );
}

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios'
    ? isIphoneX()
      ? 44
      : 20
    : StatusBar.currentHeight || 0;

export const NAVIGATION_BAR_HEIGHT = 60;

export default {
  STATUS_BAR_HEIGHT,
  NAVIGATION_BAR_HEIGHT,
};
