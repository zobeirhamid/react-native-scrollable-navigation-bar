// @flow
import * as React from 'react';
import { Animated, View } from 'react-native';
import Sticky from './api/Sticky';
import NavigationBarContainer from './api/NavigationBarContainer';
import Header from './api/Header';
import NavigationBar from './components/NavigationBar';
import Container from './api/Container';
import StatusBar from './components/StatusBar';
import NavigationBarIcon from './components/NavigationBar/NavigationBarIcon';
import Snap from './api/Snap';
import type {
  StatusBarComponentProps,
  ContainerProps,
  ContainerDefaultProps,
  BackButtonProps
} from './types';
import { NAVIGATION_BAR_HEIGHT, STATUS_BAR_HEIGHT } from './constants';

const ImageStatusBar = () => (
  <StatusBar.Component barStyle="light-content" backgroundColor="transparent" />
);

export type NavigationBarProps = {
  title?: string,
  titleStyle?: mixed,
  headerBackgroundColor?: string,
  borderColor?: string,
  BackButton: React.ComponentType<BackButtonProps>,
  leftIcons?: ?(React.Element<typeof NavigationBarIcon>[]),
  rightIcons?: ?(React.Element<typeof NavigationBarIcon>[]),
  iconStyle?: mixed,
  transitionPoint: number,
  reachedTransitionPoint?: boolean
};

export type ScrollableNavigationBarDefaultProps = {|
  StatusBar: React.ComponentType<StatusBarComponentProps>,
  ContainerComponent: React.AbstractComponent<
    React.Config<ContainerProps, ContainerDefaultProps>,
    Container
  >,
  snapHeight: number,
  transitionPoint: number,
  BackButton: React.ComponentType<BackButtonProps>,
  stickyHeight: number
|};

export type ScrollableNavigationBarProps = {
  ...ScrollableNavigationBarDefaultProps,
  title?: string,
  titleStyle?: mixed,
  headerBackgroundColor?: string,
  borderColor?: string,
  leftIcons?: ?(React.Element<typeof NavigationBarIcon>[]),
  rightIcons?: ?(React.Element<typeof NavigationBarIcon>[]),
  iconStyle?: mixed,
  headerTitle?: string,
  headerTitleStyle?: mixed,
  bigLeftIcons?: ?(React.Element<typeof NavigationBarIcon>[]),
  bigRightIcons?: ?(React.Element<typeof NavigationBarIcon>[]),
  bigIconStyle?: mixed,
  children?: React.Node,
  collapsible?: boolean,
  StickyComponent?: React.ComponentType<any>,
  stickyCollapsible?: boolean,
  containerRef?: Function,
  stayCollapsed?: boolean,
  SnapComponent?: React.ComponentType<any>,
  HeaderBackgroundComponent?: React.ComponentType<any>,
  parallax?: number,
  fadeOut?: boolean,
  afterTransitionPoint?: () => void,
  beforeTransitionPoint?: () => void,
  ScrollComponent?: React.ComponentType<Animated.ScrollView>,
  animatedValue?: Animated.Value,
  HeaderForegroundComponent?: mixed => mixed,
  HeaderScrolledComponent?: mixed => mixed,
  HeaderUnscrolledComponent?: mixed => mixed,
  backgroundColor?: string,
  extraData?: mixed
};

function applyIconStyle(
  icons: ?(React.Element<typeof NavigationBarIcon>[]),
  iconStyle: mixed
) {
  if (!icons) return icons;
  return React.Children.map(icons, element => ({
    ...element,
    props: {
      ...element.props,
      style: [iconStyle, element.props.style]
    }
  }));
}

const NavigationBarComponent = React.memo(
  ({
    title,
    titleStyle,
    headerBackgroundColor,
    borderColor,
    BackButton,
    leftIcons,
    rightIcons,
    iconStyle,
    transitionPoint,
    reachedTransitionPoint
  }: NavigationBarProps) => (
    <NavigationBar
      title={title}
      titleStyle={titleStyle}
      backgroundColor={headerBackgroundColor}
      borderColor={
        transitionPoint !== ScrollableNavigationBar.defaultProps.transitionPoint
          ? undefined
          : borderColor
      }
      BackButton={() => (
        <BackButton
          style={iconStyle}
          reachedTransitionPoint={reachedTransitionPoint}
        />
      )}
      leftIcons={applyIconStyle(leftIcons, iconStyle)}
      rightIcons={applyIconStyle(rightIcons, iconStyle)}
    />
  )
);

const NavigatonBarContainerComponent = React.memo(props => {
  const { collapsible, stayCollapsed } = props;

  return (
    <NavigationBarContainer
      collapsible={collapsible}
      stayCollapsed={stayCollapsed}
    >
      <NavigationBarComponent {...props} />
    </NavigationBarContainer>
  );
});

const HeaderComponent = React.memo(props => {
  const {
    title,
    titleStyle,
    headerTitle,
    headerTitleStyle,
    headerBackgroundColor,
    headerBorderColor,
    borderColor,
    collapsible,
    stayCollapsed,
    snapHeight,
    SnapComponent,
    HeaderBackgroundComponent,
    parallax,
    iconStyle,
    bigIconStyle,
    leftIcons,
    rightIcons,
    bigLeftIcons,
    bigRightIcons,
    fadeOut,
    HeaderForegroundComponent,
    HeaderScrolledComponent,
    HeaderUnscrolledComponent
  } = props;
  const imageStyle =
    HeaderBackgroundComponent !== undefined ? { color: 'white' } : {};
  return (
    <React.Fragment>
      <Header
        stayCollapsed={stayCollapsed}
        collapsible={collapsible}
        title={headerTitle}
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
                  reachedTransitionPoint
                  title={undefined}
                  borderColor={undefined}
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
            : () => <NavigationBarComponent {...props} reachedTransitionPoint />
        }
      />
      <Snap snapHeight={snapHeight}>
        {SnapComponent !== undefined && <SnapComponent />}
      </Snap>
    </React.Fragment>
  );
});

const HeaderRender = React.memo(props => {
  const {
    stickyCollapsible,
    stayCollapsed,
    stickyHeight,
    transitionPoint,
    StickyComponent
  } = props;
  return (
    <React.Fragment>
      {transitionPoint ===
      ScrollableNavigationBar.defaultProps.transitionPoint ? (
        <NavigatonBarContainerComponent {...props} />
      ) : (
        <HeaderComponent {...props} />
      )}
      <Sticky
        collapsible={stickyCollapsible}
        stayCollapsed={stayCollapsed}
        height={
          stickyCollapsible && collapsible && !stayCollapsed
            ? NAVIGATION_BAR_HEIGHT - STATUS_BAR_HEIGHT
            : stickyHeight
        }
      >
        {StickyComponent !== undefined && <StickyComponent />}
      </Sticky>
    </React.Fragment>
  );
});

class ScrollableNavigationBar extends React.Component<ScrollableNavigationBarProps> {
  container: ?React.ElementRef<typeof Container>;

  static defaultProps = {
    StatusBar: () => (
      <StatusBar.Component
        barStyle="dark-content"
        backgroundColor="transparent"
      />
    ),
    BackButton: () => null,
    ContainerComponent: Container,
    snapHeight: 0,
    transitionPoint: NAVIGATION_BAR_HEIGHT,
    stickyHeight: 0
  };

  getContainerNode() {
    return this.container;
  }

  /*
  shouldComponentUpdate() {
    return false;
  }
  */

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.extraData !== this.props.extraData;
  }

  render() {
    const {
      StatusBar,
      children,
      StickyComponent,
      stickyCollapsible,
      ContainerComponent,
      containerRef,
      stayCollapsed,
      transitionPoint,
      snapHeight,
      beforeTransitionPoint,
      afterTransitionPoint,
      HeaderBackgroundComponent,
      ScrollComponent,
      animatedValue,
      stickyHeight,
      collapsible,
      backgroundColor
    } = this.props;
    return (
      <ContainerComponent
        beforeTransitionPoint={beforeTransitionPoint}
        afterTransitionPoint={afterTransitionPoint}
        transitionPoint={transitionPoint}
        snapHeight={snapHeight}
        animatedValue={animatedValue}
        ScrollComponent={ScrollComponent}
        ref={containerRef}
        StatusBar={
          HeaderBackgroundComponent !== undefined ? ImageStatusBar : StatusBar
        }
        Header={() => <HeaderRender {...this.props} />}
        {...this.props}
      >
        <View style={{ backgroundColor }}>{children}</View>
      </ContainerComponent>
    );
  }
}

export default React.forwardRef<
  React.Config<
    ScrollableNavigationBarProps,
    ScrollableNavigationBarDefaultProps
  >,
  ScrollableNavigationBar
>((props, ref: Function) => (
  <ScrollableNavigationBar containerRef={ref} {...props} />
));
