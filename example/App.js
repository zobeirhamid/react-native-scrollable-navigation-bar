import 'react-native-gesture-handler';
import React from 'react';
import {YellowBox} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import NavigationService from './NavigationService';
import Screens from './Screens';
import HomeScreen from './HomeScreen';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: props => (
      <HomeScreen screens={Screens} initialScreen {...props} title="Home" />
    ),
    Regular: props => (
      <HomeScreen screens={Screens.Regular} title="Regular" {...props} />
    ),
    Title: props => (
      <HomeScreen screens={Screens.Title} title="Title" {...props} />
    ),
    Image: props => (
      <HomeScreen screens={Screens.Image} title="Image" {...props} />
    ),
    ...Screens.Regular,
    ...Screens.Title,
    ...Screens.Image,
  },
  {
    initialRouteName: 'HomeScreen',
    // headerTransitionPreset: 'uikit'
    defaultNavigationOptions: {
      header: null,
    },
  },
);
const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
YellowBox.ignoreWarnings(['Each child in a list', 'Remote debugger']);

export default App;
