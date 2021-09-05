import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from 'screens/WelcomeScreen/WelcomeScreen';
import HomeScreen from 'screens/HomeScreen/HomeScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  WelcomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation: React.FC<{}> = () => {
  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

RootNavigation.displayName = 'RootNavigation';

export default RootNavigation;
