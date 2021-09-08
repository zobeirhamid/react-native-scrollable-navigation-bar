---
sidebar_position: 1
---

# General Method

This method should be used when you already have all the UI elements and just wanna add the animations. Check the Container API.

```jsx
import {
  Container,
  NavigationBar,
  HeaderTitle,
  StatusBar,
} from 'react-native-scrollable-navigation-bar';
```

```jsx live
function Example(props) {
  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  function NavigationBarComponent(props) {
    return (
      <NavigationBar
        title={'Hello World'}
        titleStyle={{ color: 'black' }}
        backgroundColor={'#f5f5f5'}
        {...props}
      />
    );
  }

  function HeaderNavigationBarComponent(props) {
    return <NavigationBar backgroundColor={'#f5f5f5'} {...props} />;
  }

  function HeaderForegroundComponent(props) {
    return (
      <HeaderTitle
        title={'Hello World'}
        titleStyle={{ color: 'black' }}
        {...props}
      />
    );
  }

  function HeaderBackgroundComponent(props) {
    return <View style={{ height: 300, backgroundColor: '#f5f5f5' }} />;
  }

  function BorderComponent(props) {
    return <Border backgroundColor={'lightgrey'} height={1} />;
  }

  function HeaderBorderComponent(props) {
    return <Border backgroundColor={'lightgrey'} height={1} />;
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <Container
        headerHeight={300}
        HeaderForegroundComponent={HeaderForegroundComponent}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        HeaderNavigationBarComponent={HeaderNavigationBarComponent}
        NavigationBarComponent={NavigationBarComponent}
        contentContainerStyle={{ backgroundColor: 'white' }}
        borderHeight={1}
        BorderComponent={BorderComponent}
        HeaderBorderComponent={HeaderBorderComponent}
      >
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Container>
    </View>
  );
}
```
