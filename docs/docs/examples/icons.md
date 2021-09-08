---
sidebar_position: 5
---

# Icons

This is specific for `AppleStyle` where you can define `leftIcons` and `rightIcons`. In this example, `react-native-vector-icons` are used, but you would need to install it first. Any other `ReactElement` is also valid.

## Regular

```jsx
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
```

```jsx live
function Example(props) {
  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        headerHeight={300}
        title={'Hello World'}
        leftIcons={[
          <Ionicons name={'ios-rocket'} size={24} style={{ color: 'black' }} />,
          <Ionicons name={'ios-heart'} size={24} style={{ color: 'black' }} />,
        ]}
        rightIcons={[
          <Ionicons name={'ios-heart'} size={24} style={{ color: 'black' }} />,
          <Ionicons name={'ios-rocket'} size={24} style={{ color: 'black' }} />,
        ]}
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

## Header Icons

If we want different icons before the `transitionPoint` so we can utilize `headerLeftIcons` and `headerRightIcons`.

```jsx
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
        headerLeftIcons={[
          <Ionicons name={'ios-rocket'} size={24} style={{ color: 'white' }} />,
          <Ionicons name={'ios-heart'} size={24} style={{ color: 'white' }} />,
        ]}
        headerRightIcons={[
          <Ionicons name={'ios-heart'} size={24} style={{ color: 'white' }} />,
          <Ionicons name={'ios-rocket'} size={24} style={{ color: 'white' }} />,
        ]}
        leftIcons={[
          <Ionicons name={'ios-rocket'} size={24} style={{ color: 'black' }} />,
          <Ionicons name={'ios-heart'} size={24} style={{ color: 'black' }} />,
        ]}
        rightIcons={[
          <Ionicons name={'ios-heart'} size={24} style={{ color: 'black' }} />,
          <Ionicons name={'ios-rocket'} size={24} style={{ color: 'black' }} />,
        ]}
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
