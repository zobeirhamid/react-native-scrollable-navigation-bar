import * as React from 'react';
import {SearchContainer} from 'react-native-scrollable-navigation-bar';
import {SearchBar} from 'react-native-elements';
import MainRegularNavigationBar from '.';

class SearchRegularNavigationBar extends React.Component {
  searchContainer = React.createRef();

  render() {
    return (
      <MainRegularNavigationBar
        stickyCollapsible
        stickyHeight={65}
        StickyComponent={() => (
          <SearchBar
            platform="ios"
            lightTheme
            placeholder="Type Here..."
            onFocus={() => {
              if (this.searchContainer.current)
                this.searchContainer.current.onFocus();
            }}
            onBlur={() => {
              if (this.searchContainer.current)
                this.searchContainer.current.onBlur();
            }}
          />
        )}
        ScrollViewComponent={SearchContainer}
        ref={this.searchContainer}
      />
    );
  }
}

export default SearchRegularNavigationBar;
