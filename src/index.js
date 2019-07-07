// @flow
import * as React from 'react';
import { Animated } from 'react-native';
import Sticky from './api/Sticky';
import NavigationBarContainer from './api/NavigationBarContainer';
import Header from './api/Header';
import NavigationBar from './components/NavigationBar';
import Container from './api/Container';
import StatusBarComponent from './components/StatusBarComponent';
import NavigationBarIcon from './components/NavigationBar/NavigationBarIcon';
import Snap from './api/Snap';
import type {
  StatusBarComponentProps,
  ContainerProps,
  ContainerDefaultProps,
  BackButtonProps
} from './types';
import { NAVIGATION_BAR_HEIGHT } from './constants';

const ImageStatusBar = () => (
  <StatusBarComponent barStyle="light-content" backgroundColor="transparent" />
);

export type NavigationBarProps = {
  title?: string,
  titleStyle?: mixed,
  backgroundColor?: string,
  borderColor?: string,
  BackButton: React.ComponentType<BackButtonProps>,
  leftIcons?: ?(React.Element<typeof NavigationBarIcon>[]),
  rightIcons?: ?(React.Element<typeof NavigationBarIcon>[]),
  iconStyle?: mixed,
  transitionPoint: number
};

export type ScrollableNavigationBarDefaultProps = {|
  StatusBar: React.ComponentType<StatusBarComponentProps>,
  ContainerComponent: React.AbstractComponent<
    React.Config<ContainerProps, ContainerDefaultProps>,
    Container
  >,
  snapHeight: number,
  transitionPoint: number,
  BackButton: React.ComponentType<BackButtonProps>
|};

export type ScrollableNavigationBarProps = {
  ...ScrollableNavigationBarDefaultProps,
  title?: string,
  titleStyle?: mixed,
  backgroundColor?: string,
  borderColor?: string,
  leftIcons?: ?(React.Element<typeof NavigationBarIcon>[]),
  rightIcons?: ?(React.Element<typeof NavigationBarIcon>[]),
  iconStyle?: mixed,
  headerTitle?: string,
  headertitleStyle?: mixed,
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
  ImageComponent?: React.ComponentType<any>,
  parallax?: number,
  fadeOut?: boolean,
  afterTransitionPoint?: () => void,
  beforeTransitionPoint?: () => void,
  ScrollComponent?: React.ComponentType<Animated.ScrollView>,
  animatedValue?: Animated.Value,
  HeaderForegroundComponent?: mixed => mixed,
  HeaderScrolledComponent?: mixed => mixed,
  HeaderUnscrolledComponent?: mixed => mixed
};

class ScrollableNavigationBar extends React.Component<ScrollableNavigationBarProps> {
  container: ?React.ElementRef<typeof Container>;

  static defaultProps = {
    StatusBar: () => (
      <StatusBarComponent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
    ),
    BackButton: () => null,
    ContainerComponent: Container,
    snapHeight: 0,
    transitionPoint: NAVIGATION_BAR_HEIGHT
  };

  getContainerNode() {
    return this.container;
  }

  applyIconStyle(
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

  renderNavigationBarContainer() {
    const { collapsible, stayCollapsed } = this.props;

    return (
      <NavigationBarContainer
        collapsible={collapsible}
        stayCollapsed={stayCollapsed}
      >
        {this.renderNavigationBar(this.props)}
      </NavigationBarContainer>
    );
  }

  renderNavigationBar({
    title,
    titleStyle,
    backgroundColor,
    borderColor,
    BackButton,
    leftIcons,
    rightIcons,
    iconStyle,
    transitionPoint
  }: NavigationBarProps) {
    return (
      <NavigationBar
        title={title}
        titleStyle={titleStyle}
        backgroundColor={backgroundColor}
        borderColor={
          transitionPoint !==
          ScrollableNavigationBar.defaultProps.transitionPoint
            ? undefined
            : borderColor
        }
        BackButton={() => <BackButton style={iconStyle} />}
        leftIcons={this.applyIconStyle(leftIcons, iconStyle)}
        rightIcons={this.applyIconStyle(rightIcons, iconStyle)}
      />
    );
  }

  renderHeader() {
    const {
      title,
      titleStyle,
      headerTitle,
      headertitleStyle,
      backgroundColor,
      borderColor,
      collapsible,
      stayCollapsed,
      snapHeight,
      SnapComponent,
      ImageComponent,
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
    } = this.props;
    const imageStyle = ImageComponent !== undefined ? { color: 'white' } : {};
    return (
      <React.Fragment>
        <Header
          stayCollapsed={stayCollapsed}
          collapsible={collapsible}
          title={headerTitle || title}
          titleStyle={headertitleStyle || titleStyle || imageStyle}
          backgroundColor={backgroundColor}
          borderColor={SnapComponent !== undefined ? undefined : borderColor}
          snapHeight={snapHeight}
          parallax={parallax}
          fadeOut={fadeOut}
          BackgroundComponent={ImageComponent}
          ForegroundComponent={HeaderForegroundComponent}
          UnscrolledNavigationBar={
            HeaderUnscrolledComponent !== undefined
              ? HeaderUnscrolledComponent
              : () =>
                  this.renderNavigationBar({
                    ...this.props,
                    title: undefined,
                    borderColor: undefined,
                    leftIcons: bigLeftIcons || leftIcons,
                    rightIcons: bigRightIcons || rightIcons,
                    iconStyle: bigIconStyle || iconStyle || imageStyle,
                    backgroundColor:
                      ImageComponent !== undefined
                        ? 'transparent'
                        : this.props.backgroundColor
                  })
          }
          ScrolledNavigationBar={
            HeaderScrolledComponent !== undefined
              ? HeaderScrolledComponent
              : () => this.renderNavigationBar(this.props)
          }
        />
        <Snap snapHeight={snapHeight}>
          {SnapComponent !== undefined && <SnapComponent />}
        </Snap>
      </React.Fragment>
    );
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
      ImageComponent,
      ScrollComponent,
      animatedValue
    } = this.props;
    return (
      <ContainerComponent
        beforeTransitionPoint={beforeTransitionPoint}
        afterTransitionPoint={afterTransitionPoint}
        transitionPoint={transitionPoint}
        headerHeight={transitionPoint - snapHeight}
        animatedValue={animatedValue}
        ScrollComponent={ScrollComponent}
        ref={containerRef}
        StatusBar={ImageComponent !== undefined ? ImageStatusBar : StatusBar}
        Header={() => (
          <React.Fragment>
            {transitionPoint ===
            ScrollableNavigationBar.defaultProps.transitionPoint
              ? this.renderNavigationBarContainer()
              : this.renderHeader()}
            <Sticky
              collapsible={stickyCollapsible}
              stayCollapsed={stayCollapsed}
            >
              {StickyComponent !== undefined && <StickyComponent />}
            </Sticky>
          </React.Fragment>
        )}
      >
        {children}
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
