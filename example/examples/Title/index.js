import * as React from 'react';
import ScrollableNavigationBar, {
  StatusBarComponent,
  NavigationBarIcon,
  BackButton
} from 'react-native-scrollable-navigation-bar';
import Placeholders from '../Placeholders';
import NavigationService from '../../NavigationService';

class MainTitleNavigationBar extends React.Component {
  render() {
    return (
      <ScrollableNavigationBar
        transitionPoint={250}
        StatusBar={() => (
          <StatusBarComponent
            barStyle="dark-content"
            backgroundColor="#f5f5f5"
          />
        )}
        title="Title"
        headerBackgroundColor="#f5f5f5"
        borderColor="lightgrey"
        BackButton={({ style }) => (
          <BackButton
            style={style}
            onPress={() => NavigationService.goBack()}
          />
        )}
        leftIcons={[<NavigationBarIcon name="ios-heart" />]}
        rightIcons={[<NavigationBarIcon name="ios-rocket" />]}
        {...this.props}
      >
        <Placeholders number={10} />
      </ScrollableNavigationBar>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <MainTitleNavigationBar containerRef={ref} {...props} />
));

/*
// @flow
import * as React from 'react';
import {
  StatusBarComponent,
  Container,
  Header,
  NavigationBar
} from 'react-native-scrollable-navigation-bar';
import Placeholders from '../Placeholders';

type Props = {};

class TitleNavigationBar extends React.Component<Props> {
  render() {
    const transitionPoint = 200;
    return (
      <Container
        transitionPoint={transitionPoint}
        StatusBar={() => (
          <StatusBarComponent barStyle="dark-content" backgroundColor="white" />
        )}
        Header={() => (
          <React.Fragment>
            <Header
              title="TitleNavigationBar"
              titleStyle={{ color: 'black' }}
              backgroundColor="white"
              // borderColor="lightgrey"
              UnscrolledNavigationBar={() => (
                <NavigationBar backgroundColor="white" />
              )}
              ScrolledNavigationBar={() => (
                <NavigationBar
                  title="TitleNavigationBar"
                  backgroundColor="white"
                />
              )}
            />
          </React.Fragment>
        )}
      >
        <Placeholders number={10} />
      </Container>
    );
  }
}

export default TitleNavigationBar;
*/
