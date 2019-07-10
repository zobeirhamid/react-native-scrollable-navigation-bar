import React from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import NavigationService from './NavigationService';
import Screens from './Screens';
import HomeScreen from './HomeScreen';
import SectionList from './SectionList';

const AppNavigator = createStackNavigator(
  {
    SectionList,
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
    ...Screens.Image
  },
  {
    initialRouteName: 'HomeScreen',
    // headerTransitionPreset: 'uikit'
    defaultNavigationOptions: {
      header: null
    }
  }
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
