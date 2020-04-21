import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Tab from './Tab';

const {width} = Dimensions.get('window');

const primaryColor = 'rgb(14, 94, 84)';

const iconWidth = (628 / 481) * 16 + 30;
const indicatorWidth = (width - iconWidth) / 3;

const TabText = ({children}: {children?: React.ReactNode}) => {
  return <Text style={{color: 'white', fontWeight: '600'}}>{children}</Text>;
};

const TabBar = ({
  index,
  changeTab,
}: {
  index: number;
  changeTab: (index: number) => void;
}) => {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: primaryColor,
      }}>
      <Tab width={iconWidth} active={index === 0} onPress={() => changeTab(0)}>
        <Image
          source={require('../../camera.png')}
          style={{
            tintColor: 'white',
            height: 16,
            margin: 15,
            width: iconWidth - 30,
          }}
        />
      </Tab>
      <Tab
        width={indicatorWidth}
        active={index === 1}
        onPress={() => changeTab(1)}>
        <TabText>CHATS</TabText>
      </Tab>
      <Tab
        width={indicatorWidth}
        active={index === 2}
        onPress={() => changeTab(2)}>
        <TabText>STATUS</TabText>
      </Tab>
      <Tab
        width={indicatorWidth}
        active={index === 3}
        onPress={() => changeTab(3)}>
        <TabText>CALLS</TabText>
      </Tab>
    </View>
  );
};

export default TabBar;
