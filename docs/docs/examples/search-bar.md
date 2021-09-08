---
sidebar_position: 3
---

# Search Bar

This is a replication of the iOS Search Bar animation. First, you need to create two `refs`, one for the `TextInput` and one for the `Container`. Then you put the `TextInput` as the `SnapComponent`. Next you you define `onBlur` on the `Container`, which triggers `textInputRef.blur()`. Then you define `onFocus` and `onBlur` on the `TextInput` which trigger `containerRef.focus()` and `containerRef.blur()` respectively.

```jsx
import { AppleStyle } from 'react-native-scrollable-navigation-bar';
import { SearchBar } from 'react-native-elements';
```

```jsx live
function Example(props) {
  const ref = useRef(null);
  const inputRef = useRef(null);

  function Placeholder(props) {
    return (
      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />
    );
  }

  function SnapComponent() {
    return (
      <SearchBar
        ref={inputRef}
        platform="ios"
        lightTheme
        placeholder="Type Here..."
        onFocus={() => {
          if (ref.current) {
            ref.current.focus();
          }
        }}
        onBlur={() => {
          if (ref.current) {
            ref.current.blur();
          }
        }}
        containerStyle={{ backgroundColor: 'transparent' }}
      />
    );
  }

  return (
    <View style={{ height: 500, width: 300, margin: 'auto' }}>
      <AppleStyle
        headerHeight={300}
        title={'Hello World'}
        SnapComponent={SnapComponent}
        snapHeight={72}
        ref={ref}
        onBlur={() => {
          if (inputRef.current) {
            inputRef.current.blur();
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
