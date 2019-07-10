import * as React from 'react';
import ScrollableNavigationBar, {
  StatusBarComponent,
  NavigationBarIcon,
  BackButton
} from 'react-native-scrollable-navigation-bar';
import Placeholders from '../Placeholders';
import NavigationService from '../../NavigationService';

class MainRegularNavigationBar extends React.Component {
  render() {
    return (
      <ScrollableNavigationBar
        StatusBar={() => (
          <StatusBarComponent
            barStyle="light-content"
            backgroundColor="dodgerblue"
          />
        )}
        title="RegularNavigationBar"
        titleStyle={{ color: 'white' }}
        headerBackgroundColor="dodgerblue"
        borderColor="blue"
        iconStyle={{ color: 'darkblue' }}
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
  <MainRegularNavigationBar containerRef={ref} {...props} />
));
