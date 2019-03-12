import React from 'react';
import { FlatList } from 'react-native';
import {
  ScrollableBigNavBar,
  NavigationBarIcon
} from 'react-native-scrollable-navigation-bar';
import NavigationService from '../NavigationService';

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

class BigNavigationBar extends React.Component {
  render() {
    return (
      <ScrollableBigNavBar
        height={200}
        bigTitleStyle={{ color: 'red' }}
        titleStyle={{ color: 'blue' }}
        increaseFontSize
        title="Regular"
        backgroundColor="white"
        borderColor="#EAEAEA"
        withShadow
        backButton={{
          visible: true,
          onPress: () => NavigationService.goBack()
        }}
        leftIcons={[<NavigationBarIcon name="heart" onPress={() => {}} />]}
        statusBar={{
          barStyle: 'dark-content',
          backgroundColor: 'white'
        }}
        VirtualList={props => (
          <FlatList
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
