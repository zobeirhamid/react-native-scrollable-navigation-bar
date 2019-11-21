// @flow
import * as React from "react";
import { Animated, View } from "react-native";
import { appear } from "../hoc";
import NavigationBarContainer from "../NavigationBarContainer";
import { ContextConsumer } from "../Context";
import { NAVIGATION_BAR_HEIGHT } from "../../constants";
import type {
  HeaderNavigationBarProps,
  HeaderNavigationBarDefaultProps,
  ContainerState
} from "../../types";

class HeaderNavigationBar extends React.Component<
  HeaderNavigationBarProps,
  ContainerState
> {
  static defaultProps: HeaderNavigationBarDefaultProps = {
    transitionPoint: NAVIGATION_BAR_HEIGHT,
    navigationBarHeight: NAVIGATION_BAR_HEIGHT,
    animatedValue: new Animated.Value(0)
  };

  state = {
    reachedTransitionPoint: false
  };

  componentDidMount() {
    const { containerEvents } = this.props;
    if (containerEvents !== undefined){
        this.listener = containerState => this.setState(containerState);
        containerEvents.listen();
    }
  }

  componentWillUnmount() {
    const { containerEvents } = this.props;
    if (containerEvents !== undefined){
      containerEvents.listen(this.listener);
    }
  }

  render() {
    const {
      backgroundColor,
      UnscrolledNavigationBar,
      ScrolledNavigationBar,
      collapsible,
      transitionPoint,
      animatedValue,
      navigationBarHeight,
      stayCollapsed
    } = this.props;
    const { reachedTransitionPoint } = this.state;
    return (
      <View
        pointerEvents="box-none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10
        }}
      >
        <NavigationBarContainer
          translucent
          style={{ zIndex: 1 }}
          collapsible={collapsible}
          stayCollapsed={stayCollapsed}
        >
          <UnscrolledNavigationBar />
        </NavigationBarContainer>
        {appear(
          <NavigationBarContainer
            translucent
            style={{ zIndex: 2 }}
            collapsible={collapsible}
            stayCollapsed={stayCollapsed}
            pointerEvents={
              reachedTransitionPoint === true ? "box-none" : "none"
            }
          >
            <ScrolledNavigationBar backgroundColor={backgroundColor} />
          </NavigationBarContainer>,
          animatedValue,
          transitionPoint - (navigationBarHeight + 30),
          transitionPoint - navigationBarHeight
        )}
      </View>
    );
  }
}

export default ContextConsumer(HeaderNavigationBar);
