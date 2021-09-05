import React, {useMemo, useRef} from 'react';
import {
  Animated,
  View,
  StatusBar,
  TextInput,
  RefreshControl,
} from 'react-native';
import withTheme from 'library/higherOrderComponents/withTheme';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
//import RootNavigation from 'navigation/RootNavigation';
import Container, {AppleStyle} from 'react-native-scrollable-navigation-bar';
import {useWindowDimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';
import {Platform} from 'react-native';

const NavBarIcon = ({
  name,
  color = 'black',
}: {
  name: string;
  color?: string;
}) => {
  return <Ionicons name={name} size={24} style={{color: color}} />;
};

const Placeholder = () => {
  return (
    <View
      style={{
        height: 200,
        margin: 50,
        backgroundColor: 'grey',
      }}
    />
  );
};

const StickyComponent = () => {
  return <View style={{height: 30, backgroundColor: 'red'}} />;
};

const ImageCarousel = () => {
  const {width} = useWindowDimensions();
  const imageStyle = {
    width,
    height: 300,
  };
  return (
    <Animated.ScrollView
      horizontal
      bounces={false}
      pagingEnabled
      showsHorizontalScrollIndicator={false}>
      <Animated.Image
        source={{
          uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
        }}
        style={imageStyle}
      />
      <Animated.Image
        source={{
          uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
        }}
        style={imageStyle}
      />
    </Animated.ScrollView>
  );
};

export default withTheme(() => {
  const ref = useRef<Container>(null);
  const inputRef = useRef<TextInput>(null);

  const SnapComponent = useMemo(() => {
    return () => (
      //@ts-ignore
      <SearchBar
        ref={inputRef}
        platform="ios"
        lightTheme
        placeholder="Type Here..."
        onFocus={() => {
          ref.current?.focus();
        }}
        onBlur={() => {
          ref.current?.blur();
        }}
        containerStyle={{backgroundColor: 'transparent'}}
      />
    );
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppleStyle
        /*
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        */
        ref={ref}
        leftIcons={[<NavBarIcon name={'ios-heart'} color={'white'} />]}
        unscrolledLeftIcons={[
          <NavBarIcon name={'ios-heart'} color={'black'} />,
        ]}
        rightIcons={[<NavBarIcon name={'ios-rocket'} color={'white'} />]}
        unscrolledRightIcons={[
          <NavBarIcon name={'ios-rocket'} color={'black'} />,
        ]}
        //HeaderBackgroundComponent={ImageCarousel}
        /*
        contentInset={Platform.select({ios: {top: -30}})}
        contentOffset={Platform.select({
          ios: {
            x: 0,
            y: 30,
          },
        })}
        */
        //collapsible
        //stayCollapsed
        title={'Hello World'}
        beforeTransitionPoint={() => {
          StatusBar.setBarStyle('light-content');
        }}
        afterTransitionPoint={() => {
          StatusBar.setBarStyle('dark-content');
        }}
        onBlur={() => {
          inputRef.current?.blur();
        }}
        //headerHeight={300}
        //SnapComponent={SnapComponent}
        //snapHeight={72}
        StickyComponent={StickyComponent}
        stickyHeight={30}
        stickyCollapsible
        //stickyStayCollapsed
        // STYLE ATTRIBUTES
        transition
        navigationBarBackgroundColor={'dodgerblue'}
        titleColor={'white'}
        headerTitleColor={'black'}
        headerBackgroundColor={'#f5f5f5'}
        borderHeight={10}
        navigationBorderColor={'darkblue'}
        headerBorderColor={'lightgrey'}
        backgroundColor={'white'}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </AppleStyle>
    </GestureHandlerRootView>
  );
});
