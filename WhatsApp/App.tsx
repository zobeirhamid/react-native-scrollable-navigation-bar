/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef} from 'react';
import {
  Animated as NativeAnimated,
  View,
  Text,
  Image,
  Dimensions,
  InteractionManager,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import {
  Container,
  NavigationBarContainer,
  Sticky,
  CustomScrollView,
  StatusBarComponent,
} from 'react-native-scrollable-navigation-bar';

import Animated, {Extrapolate} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

declare const global: {HermesInternal: null | {}};

const primaryColor = 'rgb(14, 94, 84)';
const primaryColorDark = 'rgb(8, 65, 52)';
const iconWidth = (628 / 481) * 16 + 30;
const indicatorWidth = (width - iconWidth) / 3;

const WhatsAppTabText = ({children}: {children?: React.ReactNode}) => {
  return <Text style={{color: 'white', fontWeight: '600'}}>{children}</Text>;
};

const WhatsAppTab = ({
  children,
  active = false,
  width,
  onPress,
}: {
  children?: React.ReactNode;
  active?: boolean;
  width: number;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: active ? 1 : 0.5,
          height: 50,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const WhatsAppTabBar = ({
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
      <WhatsAppTab
        width={iconWidth}
        active={index === 0}
        onPress={() => changeTab(0)}>
        <Image
          source={require('./camera.png')}
          style={{
            tintColor: 'white',
            height: 16,
            margin: 15,
            width: iconWidth - 30,
          }}
        />
      </WhatsAppTab>
      <WhatsAppTab
        width={indicatorWidth}
        active={index === 1}
        onPress={() => changeTab(1)}>
        <WhatsAppTabText>CHATS</WhatsAppTabText>
      </WhatsAppTab>
      <WhatsAppTab
        width={indicatorWidth}
        active={index === 2}
        onPress={() => changeTab(2)}>
        <WhatsAppTabText>STATUS</WhatsAppTabText>
      </WhatsAppTab>
      <WhatsAppTab
        width={indicatorWidth}
        active={index === 3}
        onPress={() => changeTab(3)}>
        <WhatsAppTabText>CALLS</WhatsAppTabText>
      </WhatsAppTab>
    </View>
  );
};

const WhatsAppIndicator = ({value}: {value: Animated.Value<number>}) => {
  const animatedWidth = value.interpolate({
    inputRange: [0, 1],
    outputRange: [iconWidth, indicatorWidth],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <View style={{height: 5, backgroundColor: primaryColor}}>
      <Animated.View
        style={{
          height: 5,
          width: animatedWidth,
          backgroundColor: 'white',
          transform: [
            {
              translateX: value.interpolate({
                inputRange: [0, 1, 2, 3],
                outputRange: [
                  0,
                  iconWidth,
                  iconWidth + indicatorWidth,
                  iconWidth + 2 * indicatorWidth,
                ],
                extrapolate: Extrapolate.CLAMP,
              }),
            },
          ],
        }}
      />
    </View>
  );
};

const WhatsAppNavigationBar = () => {
  return (
    <React.Fragment>
      <View style={{height: 20}} />
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
          backgroundColor: primaryColor,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 18,
            textShadowColor: 'rgba(0,0,0, 0.1)',
            textShadowRadius: 10,
          }}>
          WhatsApp
        </Text>
      </View>
    </React.Fragment>
  );
};

const WhatsAppSticky = ({
  value,
  index,
  changeTab,
}: {
  value: Animated.Value<number>;
  index: number;
  changeTab: (index: number) => void;
}) => {
  return (
    <>
      <WhatsAppTabBar index={index} changeTab={changeTab} />
      <WhatsAppIndicator value={value} />
    </>
  );
};

const WhatsAppHeader = ({
  value,
  index,
  scrollValue,
  changeTab,
}: {
  value: Animated.Value<number>;
  index: number;
  scrollValue: NativeAnimated.Value;
  changeTab: (index: number) => void;
}) => {
  return (
    <React.Fragment>
      <Container animatedValue={scrollValue}>
        <NavigationBarContainer collapsible>
          <WhatsAppNavigationBar />
        </NavigationBarContainer>
        <Sticky collapsible collapseHeight={60}>
          <WhatsAppSticky index={index} value={value} changeTab={changeTab} />
        </Sticky>
      </Container>
    </React.Fragment>
  );
};

const Scene = ({backgroundColor}: {backgroundColor: string}) => {
  return (
    <CustomScrollView
      bounces={false}
      contentContainerStyle={{
        transform: [
          {
            translateY: 0,
          },
        ],
      }}>
      <View style={{width, height, backgroundColor}} />
      <View style={{height: 10}} />
      <View style={{width, height, backgroundColor}} />
    </CustomScrollView>
  );
};

const App = () => {
  const value = useRef(new Animated.Value(0)).current;
  const scrollValue = useRef(new NativeAnimated.Value(10)).current;

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'third'},
    {key: 'fourth', title: 'fourth'},
  ]);

  const renderScene = SceneMap({
    first: () => <Scene backgroundColor={'red'} />,
    second: () => <Scene backgroundColor={'blue'} />,
    third: () => <Scene backgroundColor={'green'} />,
    fourth: () => <Scene backgroundColor={'yellow'} />,
  });

  const changeTab = (newIndex: number) => {
    setIndex(newIndex);
    InteractionManager.runAfterInteractions(() => {
      NativeAnimated.timing(scrollValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <>
      <Container
        animatedValue={scrollValue}
        navigationBarHeight={80}
        stickyHeight={55}>
        <StatusBarComponent
          barStyle="light-content"
          backgroundColor={primaryColorDark}
        />
        <WhatsAppHeader
          value={value}
          index={index}
          changeTab={changeTab}
          scrollValue={scrollValue}
        />
        <TabView
          position={value}
          renderTabBar={() => null}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={changeTab}
          initialLayout={{width}}
        />
      </Container>
    </>
  );
};

export default App;
