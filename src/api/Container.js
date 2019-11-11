// @flow
import * as React from 'react';
import { Animated } from 'react-native';
import { type ScrollEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { NAVIGATION_BAR_HEIGHT, STATUS_BAR_HEIGHT } from '../constants';
import Context from './Context';
import type {
  ContainerProps,
  ContainerDefaultProps,
  ContainerState,
  EventHandlerType
} from '../types';
import EventHandler from '../EventHandler';

class Container extends React.Component<ContainerProps, ContainerState> {
  static defaultProps: ContainerDefaultProps = {
    ScrollComponent: Animated.ScrollView,
    navigationBarHeight: NAVIGATION_BAR_HEIGHT,
    transitionPoint: NAVIGATION_BAR_HEIGHT,
    Header: () => null,
    StatusBar: () => null,
    snapHeight: 0
  };

  state = {
    reachedTransitionPoint: false,
    position: 0
  };

  animatedValue: Animated.Value = new Animated.Value(0);

  eventHandler: EventHandlerType<ContainerState>;

  component: ?Animated.ScrollView;

  constructor(props: ContainerProps) {
    super(props);
    const { animatedValue } = props;
    if (animatedValue !== undefined) {
      this.animatedValue = animatedValue;
    }
    this.eventHandler = EventHandler();
  }

  /*
  componentDidMount() {
    const { beforeTransitionPoint } = this.props;

    if (beforeTransitionPoint !== undefined) beforeTransitionPoint();
  }
  */

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.reachedTransitionPoint === this.state.reachedTransitionPoint
    );
  }

  getPosition() {
    const { position } = this.state;
    return position;
  }

  getNode() {
    if (this.component && this.component.getNode) {
      return this.component.getNode();
    }
    return this.component;
  }

  scrollListener(event: ScrollEvent) {
    const { y } = event.nativeEvent.contentOffset;
    const {
      transitionPoint,
      afterTransitionPoint,
      beforeTransitionPoint,
      navigationBarHeight
    } = this.props;
    const { reachedTransitionPoint } = this.state;
    // Would force the components to rerender too many times
    // this.setState({ position: y });

    if (
      !reachedTransitionPoint &&
      y + 1 >= transitionPoint - navigationBarHeight
    ) {
      this.setState({ reachedTransitionPoint: true }, () => {
        this.eventHandler.fire(this.state);
      });
      if (afterTransitionPoint !== undefined) afterTransitionPoint();
    }
    if (
      reachedTransitionPoint &&
      y + 1 < transitionPoint - navigationBarHeight
    ) {
      this.setState({ reachedTransitionPoint: false }, () => {
        this.eventHandler.fire(this.state);
      });
      if (beforeTransitionPoint !== undefined) beforeTransitionPoint();
    }
  }

  render() {
    const {
      children,
      Header,
      ScrollComponent,
      StatusBar,
      navigationBarHeight,
      headerHeight,
      transitionPoint,
      style,
      snapHeight,
      contentContainerStyle
    } = this.props;
    const { scrollEnabled } = this.state;
    return (
      <Context.Provider
        value={{
          transitionPoint,
          navigationBarHeight,
          headerHeight:
            headerHeight === undefined &&
            transitionPoint !== navigationBarHeight
              ? transitionPoint
              : headerHeight,
          animatedValue: this.animatedValue,
          containerEvents: this.eventHandler
        }}
      >
        <StatusBar />
        <ScrollComponent
          contentInsetAdjustmentBehavior="never"
          nestedScrollEnabled
          scrollEventThrottle={1}
          // snapToOffsets={[snapHeight, transitionPoint - navigationBarHeight]}
          // snapToEnd={false}
          // snapToStart
          // decelerationRate={0.994}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.animatedValue } } }],
            {
              listener: this.scrollListener.bind(this),
              useNativeDriver: true
            }
          )}
          ListHeaderComponent={() => (
            <Header animatedValue={this.animatedValue} />
          )}
          ref={component => {
            this.component = component;
          }}
          contentContainerStyle={contentContainerStyle}
          style={style}
          {...this.props}
        >
          <Header animatedValue={this.animatedValue} />
          {children}
        </ScrollComponent>
      </Context.Provider>
    );
  }
}

export default Container;
