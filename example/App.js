import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  RegularNavigationBar,
  BigNavigationBar,
  BigImageNavigationBar,
  BigImageParallaxNavigationBar,
  BigImageToNavigationBar,
  CustomNavigationBar,
  CustomImageNavigationBar
} from './examples';
import NavigationService from './NavigationService';

function PlaceHolder() {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginHorizontal: 15
      }}
    />
  );
}

function Screen(WrapperComponent) {
  return () => (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <WrapperComponent>
        <View style={{ backgroundColor: 'white', paddingTop: 20 }}>
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
        </View>
      </WrapperComponent>
    </View>
  );
}

class HomeScreen extends React.Component {
  renderLink(screen) {
    const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>{screen}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar
          translucent
          backgroundColor="white"
          barStyle="dark-content"
        />
        {this.renderLink('RegularNavigationBar')}
        {this.renderLink('BigNavigationBar')}
        {this.renderLink('BigImageNavigationBar')}
        {this.renderLink('BigImageParallaxNavigationBar')}
        {this.renderLink('BigImageToNavigationBar')}
        {this.renderLink('CustomNavigationBar')}
        {this.renderLink('CustomImageNavigationBar')}
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    RegularNavigationBar: Screen(RegularNavigationBar),
    BigNavigationBar: Screen(BigNavigationBar),
    BigImageNavigationBar: Screen(BigImageNavigationBar),
    BigImageParallaxNavigationBar: Screen(BigImageParallaxNavigationBar),
    BigImageToNavigationBar: Screen(BigImageToNavigationBar),
    CustomNavigationBar: Screen(CustomNavigationBar),
    CustomImageNavigationBar: Screen(CustomImageNavigationBar)
  },
  {
    headerMode: 'none'
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

export default App;
