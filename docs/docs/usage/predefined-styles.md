---
sidebar_position: 2
---

# Predefined Styles

This method uses under the hood the general method but provides UI elements. This method should be used when you want a out of the box working solution without worrying about the UI elements. So far this package only provides the predefined style `AppleStyle`.

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

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle headerHeight={300} title={'Hello World'}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </AppleStyle>
    </View>
  );
}
```
