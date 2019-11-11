import * as React from 'react';
import { StatusBar } from 'react-native';
import { StatusBarComponent } from 'react-native-scrollable-navigation-bar';
import MainTitleNavigationBar from '..';
import ImagePlaceholder from './ImagePlaceholder';

class ImageNavigationBar extends React.Component {
  render() {
    return (
      <MainTitleNavigationBar
        StatusBar={() => (
          <StatusBarComponent
            barStyle="light-content"
            backgroundColor="transparent"
          />
        )}
        afterTransitionPoint={() => StatusBar.setBarStyle('dark-content')}
        beforeTransitionPoint={() => StatusBar.setBarStyle('light-content')}
        HeaderBackgroundComponent={() => <ImagePlaceholder />}
      />
    );
  }
}

export default ImageNavigationBar;
/*
import * as React from 'react';
import { StatusBar, Image } from 'react-native';
import {
  StatusBarComponent,
  Container,
  Header,
  NavigationBar
} from 'react-native-scrollable-navigation-bar';
import Placeholders from '../../Placeholders';

type Props = {};

class ImageNavigationBar extends React.Component<Props> {
  render() {
    const transitionPoint = 300;
    return (
      <Container
        transitionPoint={transitionPoint}
        afterTransitionPoint={() => StatusBar.setBarStyle('dark-content')}
        beforeTransitionPoint={() => StatusBar.setBarStyle('light-content')}
        StatusBar={() => <StatusBarComponent barStyle="light-content" />}
        Header={() => (
          <Header
            title="TitleNavigationBar"
            height={transitionPoint}
            backgroundColor="white"
            borderColor="lightgrey"
            BackgroundComponent={() => (
              <Image
                source={require('./header.jpg')}
                style={{ width: 375, height: transitionPoint }}
              />
            )}
            ScrolledNavigationBar={() => (
              <NavigationBar
                title="TitleNavigationBar"
                backgroundColor="white"
              />
            )}
          />
        )}
      >
        <Placeholders number={10} />
      </Container>
    );
  }
}

export default ImageNavigationBar;
*/
