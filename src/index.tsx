import * as React from 'react';
import Sticky from './api/Sticky';
import NavigationBarContainer from './api/NavigationBarContainer';
import Header, {HeaderProps} from './api/Header';
import NavigationBar from './components/NavigationBar';
import Container, {ContainerProps} from './api/Container';
import CustomScrollView from './api/CustomScrollView';
import StatusBarManager from './components/StatusBarManager';
import Snap from './api/Snap';
import {NAVIGATION_BAR_HEIGHT, STATUS_BAR_HEIGHT} from './constants';
import HeaderTitle from './components/HeaderTitle';

type NavigationBarComponentProps = {
  title?: string;
  titleStyle?: object;
  headerBackgroundColor?: string;
  borderColor?: string;
  iconStyle?: object;
  leftIcons?: Array<React.ReactElement>;
  rightIcons?: Array<React.ReactElement>;
  transitionPoint?: number;
  BackButton?: React.FC<{
    style?: object;
    hasReachedTransitionPoint?: boolean;
  }>;
  hasReachedTransitionPoint?: boolean;
};

const NavigationBarComponent: React.FC<NavigationBarComponentProps> = ({
  title,
  titleStyle,
  headerBackgroundColor,
  borderColor,
  iconStyle,
  leftIcons,
  rightIcons,
  transitionPoint,
  hasReachedTransitionPoint,
  BackButton,
}) => (
  <NavigationBar
    title={title}
    titleStyle={titleStyle}
    backgroundColor={headerBackgroundColor}
    borderColor={
      transitionPoint !== NAVIGATION_BAR_HEIGHT ? undefined : borderColor
    }
    BackButton={() =>
      BackButton !== undefined ? (
        <BackButton
          style={iconStyle}
          hasReachedTransitionPoint={hasReachedTransitionPoint}
        />
      ) : null
    }
    iconStyle={iconStyle}
    leftIcons={leftIcons}
    rightIcons={rightIcons}
  />
);

const ImageStatusBar = () => (
  <StatusBarManager.Component
    barStyle="light-content"
    backgroundColor="transparent"
  />
);

type BigHeaderComponentProps = {
  HeaderBackgroundComponent?: React.FC;
  HeaderForegroundComponent?: React.FC;
  HeaderScrolledComponent?: React.FC;
  HeaderUnscrolledComponent?: React.FC;
  headerTitle?: string;
  headerTitleStyle?: object;
  headerBackgroundColor?: string;
  headerBorderColor?: string;
  SnapComponent?: React.FC;
  bigLeftIcons?: Array<any>;
  bigRightIcons?: Array<any>;
  bigIconStyle?: object;
} & HeaderProps &
  NavigationBarComponentProps;

const BigHeaderComponent: React.FC<BigHeaderComponentProps> = props => {
  const {
    HeaderBackgroundComponent,
    HeaderForegroundComponent = HeaderTitle,
    HeaderScrolledComponent,
    HeaderUnscrolledComponent,
    headerTitle,
    headerTitleStyle,
    title,
    titleStyle,
    headerBackgroundColor,
    headerBorderColor,
    borderColor,
    SnapComponent,
    snapHeight,
    parallax,
    fadeOut,
    collapsible,
    stayCollapsed,
    bigLeftIcons,
    bigRightIcons,
    bigIconStyle,
    leftIcons,
    rightIcons,
    iconStyle,
  } = props;
  const imageStyle =
    HeaderBackgroundComponent !== undefined ? {color: 'white'} : {};
  return (
    <React.Fragment>
      <Header
        stayCollapsed={stayCollapsed}
        collapsible={collapsible}
        title={headerTitle || title}
        titleStyle={headerTitleStyle || titleStyle || imageStyle}
        backgroundColor={headerBackgroundColor}
        headerBorderColor={
          SnapComponent !== undefined ? undefined : headerBorderColor
        }
        borderColor={SnapComponent !== undefined ? undefined : borderColor}
        snapHeight={snapHeight}
        parallax={parallax}
        fadeOut={fadeOut}
        BackgroundComponent={HeaderBackgroundComponent}
        ForegroundComponent={HeaderForegroundComponent}
        UnscrolledNavigationBar={
          HeaderUnscrolledComponent !== undefined
            ? HeaderUnscrolledComponent
            : () => (
                <NavigationBarComponent
                  {...props}
                  title={undefined}
                  hasReachedTransitionPoint={false}
                  leftIcons={bigLeftIcons || leftIcons}
                  rightIcons={bigRightIcons || rightIcons}
                  iconStyle={bigIconStyle || iconStyle || imageStyle}
                  headerBackgroundColor={
                    HeaderBackgroundComponent !== undefined
                      ? 'transparent'
                      : headerBackgroundColor
                  }
                />
              )
        }
        ScrolledNavigationBar={
          HeaderScrolledComponent !== undefined
            ? HeaderScrolledComponent
            : () => (
                <NavigationBarComponent
                  {...props}
                  title={headerTitle || title}
                  hasReachedTransitionPoint
                />
              )
        }
      />
      <Snap snapHeight={snapHeight} backgroundColor={headerBackgroundColor}>
        {SnapComponent !== undefined && <SnapComponent />}
      </Snap>
    </React.Fragment>
  );
};

type ScrolledNavigationBarProps = {
  collapsible?: boolean;
  stayCollapsed?: boolean;
  StickyComponent?: React.FC;
  stickyCollapsible?: boolean;
  stickyHeight?: number;
} & ContainerProps &
  HeaderComponentProps;

const defaultProps = {
  StatusBar: () => (
    <StatusBarManager.Component
      barStyle="dark-content"
      backgroundColor="transparent"
    />
  ),
  ScrollViewComponent: CustomScrollView,
};

type HeaderComponentProps = {
  StickyComponent?: React.FC;
  stickyCollapsible?: boolean;
  stickyHeight?: number;
  stickyCollapseHeight?: number;
} & BigHeaderComponentProps;

const HeaderComponent: React.FC<HeaderComponentProps> = props => {
  const {
    collapsible,
    stayCollapsed,
    StickyComponent,
    stickyCollapsible,
    stickyHeight,
    stickyCollapseHeight,
    transitionPoint,
  } = props;
  return (
    <React.Fragment>
      {transitionPoint == undefined ? (
        <NavigationBarContainer
          collapsible={collapsible}
          stayCollapsed={stayCollapsed}>
          <NavigationBarComponent {...props} />
        </NavigationBarContainer>
      ) : (
        <BigHeaderComponent {...props} />
      )}
      {StickyComponent !== undefined && stickyHeight !== undefined && (
        <Sticky
          collapsible={stickyCollapsible}
          stayCollapsed={stayCollapsed}
          collapseHeight={stickyCollapseHeight || stickyHeight}>
          <StickyComponent />
        </Sticky>
      )}
    </React.Fragment>
  );
};

/*
function useTraceUpdate(props) {
  const prev = React.useRef(props);
  React.useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps);
    }
    prev.current = props;
  });
}
*/

const ScrolledNavigationBar = React.forwardRef(
  (props: ScrolledNavigationBarProps & typeof defaultProps, ref) => {
    const {
      StatusBar,
      ScrollViewComponent,
      HeaderBackgroundComponent,
      snapHeight,
      stickyHeight,
    } = props;

    // useTraceUpdate(props);
    const CustomHeader = () => <HeaderComponent {...props} />;

    const {
      navigationBarHeight,
      transitionPoint,
      animatedValue,
      headerHeight,
    } = props;

    return (
      <Container
        navigationBarHeight={navigationBarHeight}
        headerHeight={headerHeight}
        transitionPoint={transitionPoint}
        snapHeight={snapHeight}
        stickyHeight={stickyHeight}
        animatedValue={animatedValue}>
        <ScrollViewComponent
          StatusBar={
            HeaderBackgroundComponent !== undefined ? ImageStatusBar : StatusBar
          }
          Header={CustomHeader}
          {...props}
          // @ts-ignore
          ref={ref}
        />
      </Container>
    );
  },
);

ScrolledNavigationBar.defaultProps = defaultProps;

export default ScrolledNavigationBar;
