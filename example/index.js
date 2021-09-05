import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import StorybookUI from './storybook';
import Config from 'react-native-config';

AppRegistry.registerComponent(appName, () =>
  Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App,
);
