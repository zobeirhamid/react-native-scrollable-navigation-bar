import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import MainTitleNavigationBar from '.';

class SnapTitleNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        snapHeight={66}
        SnapComponent={() => (
          <SearchBar platform="ios" lightTheme placeholder="Type Here..." />
        )}
      />
    );
  }
}

export default SnapTitleNavigationBar;
/*
import * as React from 'react';
import {
  Container,
  Header,
  NavigationBar,
  StatusBarComponent,
  Snap
} from 'react-native-scrollable-navigation-bar';
import { SearchBar } from 'react-native-elements';
import Placeholders from '../Placeholders';

type Props = {};
class SnapTitleNavigationBar extends React.Component<Props> {
  render() {
    return (
      <Container
        transitionPoint={200}
        headerHeight={150}
        Header={() => (
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
              snapHeight={50}
            />
            <Snap snapHeight={50}>
              <SearchBar platform="ios" lightTheme placeholder="Type Here..." />
            </Snap>
          </React.Fragment>
        )}
        StatusBar={() => (
          <StatusBarComponent
            barStyle="dark-content"
            backgroundColor="#f5f5f5"
          />
        )}
      >
        <Placeholders number={10} />
      </Container>
    );
  }
}

export default SnapTitleNavigationBar;
*/
