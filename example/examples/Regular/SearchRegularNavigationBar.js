import * as React from 'react';
import { SearchContainer } from 'react-native-scrollable-navigation-bar';
import { SearchBar } from 'react-native-elements';
import MainRegularNavigationBar from '.';

class SearchRegularNavigationBar extends React.Component {
  render() {
    return (
      <MainRegularNavigationBar
        stickyCollapsible
        StickyComponent={() => (
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
        ContainerComponent={SearchContainer}
        ref={component => {
          this.searchContainer = component;
        }}
      />
    );
  }
}

export default SearchRegularNavigationBar;
