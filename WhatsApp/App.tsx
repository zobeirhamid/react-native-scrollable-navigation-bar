/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef, useMemo, useState} from 'react';
import {View, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import {
  Container,
  NavigationBarContainer,
  Sticky,
  CustomScrollView,
  StatusBarComponent,
  constants,
} from 'react-native-scrollable-navigation-bar';

import Animated, {
  useCode,
  block,
  onChange,
  Easing,
} from 'react-native-reanimated';
//@ts-ignore
import {diffClampImPure as diffClamp} from 'react-native-reanimated/src/derived/diffClamp';
import WhatsAppTabBar from './src/components/TabBar';
import WhatsAppIndicator from './src/components/Indicator';
import WhatsAppNavigationBar from './src/components/NavigationBar';

const {width, height} = Dimensions.get('window');

declare const global: {HermesInternal: null | {}};

const WhatsAppHeader = ({
  value,
  index,
  changeTab,
  animatedValue,
}: {
  value: Animated.Value<number>;
  index: number;
  changeTab: (index: number) => void;
  animatedValue: Animated.Value<number>;
}) => {
  return (
    <React.Fragment>
      <NavigationBarContainer collapsible animatedValue={animatedValue}>
        <View style={{height: constants.STATUS_BAR_HEIGHT}} />
        <WhatsAppNavigationBar />
      </NavigationBarContainer>
      <Sticky
        collapsible
        collapseHeight={60}
        animatedValue={animatedValue}
        height={80}>
        <WhatsAppTabBar index={index} changeTab={changeTab} />
        <WhatsAppIndicator value={value} />
      </Sticky>
    </React.Fragment>
  );
};

const Scene = ({
  backgroundColor,
  sceneHeight = height,
  animatedValue,
}: {
  backgroundColor: string;
  sceneHeight?: number;
  animatedValue: Animated.Value<number>;
}) => {
  return (
    <CustomScrollView
      animatedValue={animatedValue}
      bounces={false}
      contentContainerStyle={{
        transform: [
          {
            translateY: 0,
          },
        ],
      }}>
      <View style={{width, height: sceneHeight, backgroundColor}} />
      <View style={{height: 10}} />
      <View style={{width, height: sceneHeight, backgroundColor}} />
    </CustomScrollView>
  );
};

const App = () => {
  const value = useRef(new Animated.Value(0)).current;
  const headerScrollValue = useRef(new Animated.Value(0)).current;
  const scrollValues = useRef(new Array(4).fill(new Animated.Value())).current;

  const [activeScrollValue, setActiveScrollValue] = useState(scrollValues[1]);

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'third'},
    {key: 'fourth', title: 'fourth'},
  ]);

  const renderScene = useMemo(
    () =>
      SceneMap({
        first: () => (
          <Scene backgroundColor={'red'} animatedValue={scrollValues[0]} />
        ),
        second: () => (
          <Scene backgroundColor={'blue'} animatedValue={scrollValues[1]} />
        ),
        third: () => (
          <Scene backgroundColor={'green'} animatedValue={scrollValues[2]} />
        ),
        fourth: () => (
          <Scene backgroundColor={'yellow'} animatedValue={scrollValues[3]} />
        ),
      }),
    [scrollValues],
  );

  const changeTab = (newIndex: number) => {
    setIndex(newIndex);
    setActiveScrollValue(scrollValues[newIndex]);
    Animated.timing(headerScrollValue, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear,
    }).start();
  };

  useCode(() => {
    return block([
      onChange(
        activeScrollValue,
        diffClamp(activeScrollValue, 0, 60, headerScrollValue),
      ),
    ]);
  }, [activeScrollValue]);

  return (
    <>
      <Container stickyHeight={55}>
        <StatusBarComponent
          barStyle="light-content"
          backgroundColor={'rgb(8, 65, 52)'}
        />
        <TabView
          position={value}
          renderTabBar={() => null}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={changeTab}
          initialLayout={{width}}
        />
        <WhatsAppHeader
          value={value}
          index={index}
          changeTab={changeTab}
          animatedValue={headerScrollValue}
        />
      </Container>
    </>
  );
};

export default App;
