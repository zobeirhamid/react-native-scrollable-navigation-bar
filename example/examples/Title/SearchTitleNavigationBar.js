import * as React from 'react';
import {SearchContainer} from 'react-native-scrollable-navigation-bar';
import {SearchBar} from 'react-native-elements';
import MainTitleNavigationBar from '.';

class SearchTitleNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        ScrollViewComponent={SearchContainer}
        ref={component => {
          this.searchContainer = component;
        }}
        snapHeight={66}
        SnapComponent={() => (
          <SearchBar
            platform="ios"
            lightTheme
            placeholder="Type Here..."
            onFocus={() => {
              if (this.searchContainer) this.searchContainer.onFocus();
            }}
            onBlur={() => {
              if (this.searchContainer) this.searchContainer.onBlur();
            }}
          />
        )}
      />
    );
  }
}

export default SearchTitleNavigationBar;
