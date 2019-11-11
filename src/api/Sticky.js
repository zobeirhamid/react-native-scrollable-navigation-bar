// @flow
import * as React from "react";
import { Animated, View } from "react-native";
import Collapsible from "./Collapsible";
import { ContextConsumer } from "./Context";
import { NAVIGATION_BAR_HEIGHT } from "../constants";
import type { StickyProps } from "../types";

class Sticky extends React.Component<StickyProps> {
  static defaultProps = {
    collapsible: false,
    stayCollapsed: false,
    transitionPoint: NAVIGATION_BAR_HEIGHT,
    navigationBarHeight: NAVIGATION_BAR_HEIGHT,
    height: 0
  };

  render() {
    const {
      children,
      style,
      collapsible,
      stayCollapsed,
      transitionPoint,
      animatedValue,
      navigationBarHeight,
      height
    }: StickyProps = this.props;
    return (
      <React.Fragment>
        <Collapsible
          active={collapsible}
          stayCollapsed={stayCollapsed}
          height={height}
        >
          <Animated.View
            pointerEvents="box-none"
            style={[
              {
                zIndex: 100,
                position: "absolute",
                top: transitionPoint,
                bottom: 0,
                left: 0,
                right: 0,
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [
                        transitionPoint - navigationBarHeight,
                        transitionPoint - navigationBarHeight + 1
                      ],
                      outputRange: [0, 1],
                      extrapolateLeft:
                        transitionPoint === navigationBarHeight
                          ? "extend"
                          : "clamp"
                    })
                  }
                ]
              },
              style
            ]}
          >
            {children}
          </Animated.View>
        </Collapsible>
        <View style={{ opacity: 0 }} pointerEvents="none">
          {children}
        </View>
      </React.Fragment>
    );
  }
}

export default ContextConsumer(Sticky);
