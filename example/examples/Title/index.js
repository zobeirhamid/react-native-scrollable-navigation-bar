import * as React from 'react';
import ScrollableNavigationBar, {
  StatusBarComponent,
  NavigationBarIcon,
  BackButton,
} from 'react-native-scrollable-navigation-bar';
import Placeholders from '../Placeholders';
import NavigationService from '../../NavigationService';

const StatusBar = () => (
  <StatusBarComponent barStyle="dark-content" backgroundColor="#f5f5f5" />
);

const BackButtonComponent = ({style}) => (
  <BackButton style={style} onPress={() => NavigationService.goBack()} />
);

const MainTitleNavigationBar = React.forwardRef((props, ref) => (
  <ScrollableNavigationBar
    transitionPoint={250}
    StatusBar={StatusBar}
    title="Title"
    headerTitle="HeaderTitle"
    headerBackgroundColor="#f5f5f5"
    borderColor="lightgrey"
    BackButton={BackButtonComponent}
    leftIcons={<NavigationBarIcon name="ios-heart" />}
    rightIcons={<NavigationBarIcon name="ios-rocket" />}
    {...props}
    ref={ref}>
    <Placeholders />
  </ScrollableNavigationBar>
));

export default MainTitleNavigationBar;
