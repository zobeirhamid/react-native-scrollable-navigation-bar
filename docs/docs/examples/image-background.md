---
sidebar_position: 4
---

# Image Background

To create an `Image Background`, you need to create a `HeaderBackgroundComponent`. It's pretty trivial, therefore following the example should be enough.

## Regular

It's important to set `headerBackgroundColor` to `transparent`.

```jsx
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
```

```jsx live
function Example(props) {
  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  function HeaderBackgroundComponent(props) {
    return (
      <Image
        source={{
          uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',
        }}
        style={{ width: 300, height: 300 }}
      />
    );
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        headerHeight={300}
        title={'Hello World'}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        headerBackgroundColor={'transparent'}
        headerTitleColor={'white'}
      >
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </AppleStyle>
    </View>
  );
}
```

## Parallax

Parallax effect is supported out of the box.

```jsx
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
```

```jsx live
function Example(props) {
  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  function HeaderBackgroundComponent(props) {
    return (
      <Image
        source={{
          uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',
        }}
        style={{ width: 300, height: 300 }}
      />
    );
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        headerHeight={300}
        title={'Hello World'}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        headerBackgroundColor={'transparent'}
        headerTitleColor={'white'}
        parallax={0.5}
      >
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </AppleStyle>
    </View>
  );
}
```

## Fade Out

Fade Out effect is supported out of the box. Put attention that it fades out, therefore the `backgroundColor` of the container is the color it fades to.

```jsx
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
```

```jsx live
function Example(props) {
  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  function HeaderBackgroundComponent(props) {
    return (
      <Image
        source={{
          uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',
        }}
        style={{ width: 300, height: 300 }}
      />
    );
  }

  return (
    <View
      style={{
        height: 500,
        width: 300,
        margin: 'auto',
        backgroundColor: 'beige',
      }}
    >
      <AppleStyle
        headerHeight={300}
        title={'Hello World'}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        headerBackgroundColor={'transparent'}
        headerTitleColor={'white'}
        backgroundColor={'white'}
        fadeOut
      >
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </AppleStyle>
    </View>
  );
}
```

## Scale

Scaling effect is supported out of the box. This is only required for iOS.

```jsx
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
```

```jsx live
function Example(props) {
  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  function HeaderBackgroundComponent(props) {
    return (
      <Image
        source={{
          uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',
        }}
        style={{ width: 300, height: 300 }}
      />
    );
  }

  return (
    <View
      style={{
        height: 500,
        width: 300,
        margin: 'auto',
      }}
    >
      <AppleStyle
        headerHeight={300}
        title={'Hello World'}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        headerBackgroundColor={'transparent'}
        headerTitleColor={'white'}
        scale={1.5}
      >
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </AppleStyle>
    </View>
  );
}
```

## Carousel

It does not have to be a plain `Image`, it can be anything, therefore we can also create a `Carousel` using a `ScrollView`.

```jsx
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
```

```jsx live
function Example(props) {
  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  function HeaderBackgroundComponent(props) {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={{
            uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',
          }}
          style={{ width: 300, height: 300 }}
        />
        <Image
          source={{
            uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',
          }}
          style={{ width: 300, height: 300 }}
        />
      </ScrollView>
    );
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        headerHeight={300}
        title={'Hello World'}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        headerBackgroundColor={'transparent'}
        headerTitleColor={'white'}
      >
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </AppleStyle>
    </View>
  );
}
```

## Handling StatusBar

This is only for `native`. When we reached the `transitionPoint` the regular Navigation Bar will show up and with that often times a change of the Status Bar style is necessary. This can be achieved using the props `beforeTransitionPoint` and `afterTransitionPoint` on `Container`.

```jsx
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
import { StatusBar } from 'react-native';
```

```jsx live
function Example(props) {
  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  function HeaderBackgroundComponent(props) {
    return (
      <Image
        source={{
          uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',
        }}
        style={{ width: 300, height: 300 }}
      />
    );
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        headerHeight={300}
        title={'Hello World'}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        headerBackgroundColor={'transparent'}
        headerTitleColor={'white'}
        beforeTransitionPoint={() => {
          if (StatusBar.setBarStyle) {
            StatusBar.setBarStyle('light-content');
          }
        }}
        afterTransitionPoint={() => {
          if (StatusBar.setBarStyle) {
            StatusBar.setBarStyle('dark-content');
          }
        }}
      >
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </AppleStyle>
    </View>
  );
}
```
