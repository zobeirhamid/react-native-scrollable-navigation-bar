import * as React from 'react';
import ScrollableNavigationBar, {
  StatusBarComponent,
  NavigationBarIcon,
  BackButton,
} from 'react-native-scrollable-navigation-bar';
import Placeholders from '../Placeholders';
import NavigationService from '../../NavigationService';

const StatusBar = () => (
  <StatusBarComponent barStyle="light-content" backgroundColor="dodgerblue" />
);

const BackButtonComponent = ({style}) => (
  <BackButton style={style} onPress={() => NavigationService.goBack()} />
);

const MainRegularNavigationBar = React.forwardRef((props, ref) => (
  <ScrollableNavigationBar
    StatusBar={StatusBar}
    BackButton={BackButtonComponent}
    title="RegularNavigationBar"
    titleStyle={{color: 'white'}}
    headerBackgroundColor="dodgerblue"
    borderColor="blue"
    iconStyle={{color: 'darkblue'}}
    leftIcons={[<NavigationBarIcon name="ios-heart" />]}
    rightIcons={[<NavigationBarIcon name="ios-rocket" />]}
    {...props}
    ref={ref}>
    <Placeholders />
  </ScrollableNavigationBar>
));

export default MainRegularNavigationBar;
