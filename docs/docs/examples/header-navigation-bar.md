---
sidebar_position: 2
---

# Header Navigation Bar

It's basically the same as the `Regular Navigation Bar` except we add a `headerHeight`.

## Plain

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
      <AppleStyle title={'Hello World'} headerHeight={300}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </AppleStyle>
    </View>
  );
}
```

## Collapsible

The Navigation Bar collapses when scrolling down and shows up when scrolling up again. All with just setting the `collapsible` prop to `true`.

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
      <AppleStyle title={'Hello World'} collapsible headerHeight={300}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </AppleStyle>
    </View>
  );
}
```

## Stay Collapsed

Sometimes we want Navigation Bar to stay hidden all the time. By itself this is similar to just putting the Navigation Bar inside the `Container`, but it's getting more interesting in combination with `StickyComponent`.

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
      <AppleStyle
        title={'Hello World'}
        collapsible
        stayCollapsed
        headerHeight={300}
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

## Sticky Component

A `Component` which sticks just right under the Navigation Bar.

### Sticky Component - Regular

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

  function StickyComponent() {
    return <View style={{ height: 50, backgroundColor: 'red' }} />;
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        title={'Hello World'}
        borderColor={'darkred'}
        StickyComponent={StickyComponent}
        stickyHeight={50}
        headerHeight={300}
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

### StickyComponent - Collapsible

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

  function StickyComponent() {
    return <View style={{ height: 50, backgroundColor: 'red' }} />;
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        title={'Hello World'}
        borderColor={'darkred'}
        StickyComponent={StickyComponent}
        stickyHeight={50}
        stickyCollapsible
        headerHeight={300}
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

### StickyComponent - Stay Collapsed

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

  function StickyComponent() {
    return <View style={{ height: 50, backgroundColor: 'red' }} />;
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        title={'Hello World'}
        borderColor={'darkred'}
        StickyComponent={StickyComponent}
        stickyHeight={50}
        stickyCollapsible
        stickyStayCollapsed
        headerHeight={300}
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

## Snap Component

This is a Component which is also directly under the Navigation Bar, but does not stick, it vanishes after the initial scroll.

```jsx live
function Example(props) {
  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  function SnapComponent() {
    return <View style={{ height: 50, backgroundColor: 'darkgreen' }} />;
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        title={'Hello World'}
        borderColor={'green'}
        SnapComponent={SnapComponent}
        snapHeight={50}
        headerHeight={300}
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

## Combination

Now comes the real power of the library, you can combine all the previous animations together. `StickyComponent` with `SnapComponent`, all the different collapses.

```jsx live
function Example(props) {
  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  function SnapComponent() {
    return <View style={{ height: 50, backgroundColor: 'darkgreen' }} />;
  }

  function StickyComponent() {
    return <View style={{ height: 50, backgroundColor: 'red' }} />;
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        title={'Hello World'}
        borderColor={'darkred'}
        StickyComponent={StickyComponent}
        stickyHeight={50}
        SnapComponent={SnapComponent}
        snapHeight={50}
        collapsible
        stayCollapsed
        stickyCollapsible
        //stickyStayCollapsed
        headerHeight={300}
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
