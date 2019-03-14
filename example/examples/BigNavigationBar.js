import React from 'react';
import { View, Animated } from 'react-native';
import {
  ScrollableBigNavBar,
  NavigationBarIcon
} from 'react-native-scrollable-navigation-bar';
import NavigationService from '../NavigationService';

function PlaceHolder() {
  return (
    <View style={{ backgroundColor: 'white', paddingHorizontal: 15 }}>
      <View
        style={{
          height: 200,
          backgroundColor: '#EAEAEA',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15
        }}
      />
    </View>
  );
}

class BigNavigationBar extends React.Component {
  render() {
    return (
      <ScrollableBigNavBar
        height={400}
        bigTitleStyle={{ color: 'red' }}
        titleStyle={{ color: 'blue' }}
        // increaseFontSize
        title="Regular"
        backgroundColor="white"
        borderColor="#EAEAEA"
        // withBigBorder
        // withShadow
        backButton={{
          visible: true,
          onPress: () => NavigationService.goBack()
        }}
        leftIcons={[<NavigationBarIcon name="heart" onPress={() => {}} />]}
        statusBar={{
          barStyle: 'dark-content',
          backgroundColor: 'white'
        }}
        ScrollComponent={props => (
          <Animated.FlatList
            contentContainerStyle={{ paddingBottom: 20 }}
            data={[0, 1, 2]}
            renderItem={() => <PlaceHolder />}
            keyExtractor={(item, index) => `test-${index}`}
            {...props}
          />
        )}
        {...this.props}
      />
    );
  }
}

export default BigNavigationBar;
