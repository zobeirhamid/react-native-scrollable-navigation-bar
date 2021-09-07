import React, {useMemo, useRef} from 'react';
import {Animated, View, StatusBar, TextInput, StyleSheet} from 'react-native';
import withTheme from 'library/higherOrderComponents/withTheme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
//import RootNavigation from 'navigation/RootNavigation';
import Container, {AppleStyle} from 'react-native-scrollable-navigation-bar';
import {useWindowDimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';

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
  return <View style={styles.placeholder} />;
};

const StickyComponent = () => {
  return <View style={styles.stickyComponent} />;
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
  const {height} = useWindowDimensions();
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
        containerStyle={styles.searchBarContainer}
      />
    );
  }, []);

  return (
    <GestureHandlerRootView style={{height}}>
      <AppleStyle
        scrollEventThrottle={1}
        ref={ref}
        leftIcons={[<NavBarIcon name={'ios-heart'} color={'white'} />]}
        rightIcons={[<NavBarIcon name={'ios-rocket'} color={'white'} />]}
        HeaderBackgroundComponent={ImageCarousel}
        title={'Hello World'}
        beforeTransitionPoint={() => {
          StatusBar.setBarStyle('light-content');
        }}
        afterTransitionPoint={() => {
          StatusBar.setBarStyle('light-content');
        }}
        onBlur={() => {
          inputRef.current?.blur();
        }}
        headerHeight={300}
        SnapComponent={SnapComponent}
        snapHeight={72}
        StickyComponent={StickyComponent}
        stickyHeight={30}
        transition
        navigationBarBackgroundColor={'dodgerblue'}
        titleColor={'white'}
        headerTitleColor={'white'}
        headerBackgroundColor={'transparent'}
        borderHeight={10}
        navigationBarBorderColor={'darkblue'}
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

const styles = StyleSheet.create({
  placeholder: {
    height: 200,
    margin: 50,
    backgroundColor: 'grey',
  },
  stickyComponent: {
    height: 30,
    backgroundColor: 'red',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
  },
});
