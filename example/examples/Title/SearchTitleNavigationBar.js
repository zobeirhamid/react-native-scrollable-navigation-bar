import * as React from 'react';
import { SearchContainer } from 'react-native-scrollable-navigation-bar';
import { SearchBar } from 'react-native-elements';
import MainTitleNavigationBar from '.';

class SearchTitleNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        ContainerComponent={SearchContainer}
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

/*
import * as React from 'react';
import {
  SearchContainer,
  Header,
  NavigationBar,
  StatusBarComponent,
  Snap
} from 'react-native-scrollable-navigation-bar';
import { SearchBar } from 'react-native-elements';
import Placeholders from '../Placeholders';

type Props = {};
type State = {
  searchActive: boolean
};

const transitionPoint = 250;
const snapHeight = 50;
const headerHeight = transitionPoint - snapHeight;

class SearchTitleNavigationBar extends React.Component<Props, State> {
  searchContainer: ?React.ElementRef<typeof SearchContainer>;

  renderHeader() {
    return (
      <React.Fragment>
        <Header
          title="TitleNavigationBar"
          titleStyle={{ color: 'black' }}
          backgroundColor="#f5f5f5"
          UnscrolledNavigationBar={() => (
            <NavigationBar backgroundColor="#f5f5f5" />
          )}
          ScrolledNavigationBar={() => (
            <NavigationBar
              title="TitleNavigationBar"
              backgroundColor="#f5f5f5"
            />
          )}
          snapHeight={snapHeight}
        />
        <Snap snapHeight={50}>
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
        </Snap>
      </React.Fragment>
    );
  }

  render() {
    return (
      <SearchContainer
        transitionPoint={transitionPoint}
        headerHeight={headerHeight}
        Header={() => this.renderHeader()}
        ref={component => {
          this.searchContainer = component;
        }}
        StatusBar={() => (
          <StatusBarComponent
            barStyle="dark-content"
            backgroundColor="#f5f5f5"
          />
        )}
      >
        <Placeholders number={10} />
      </SearchContainer>
    );
  }
}

export default SearchTitleNavigationBar;
*/
