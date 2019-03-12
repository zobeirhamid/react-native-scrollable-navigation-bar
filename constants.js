import { Platform, StatusBar } from 'react-native';

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export const NAVIGATION_BAR_HEIGHT = 60 + STATUS_BAR_HEIGHT;
