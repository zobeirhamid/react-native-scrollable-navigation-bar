// @flow
import * as React from "react";
import { Animated } from "react-native";
import { NAVIGATION_BAR_HEIGHT } from "../constants";
import EventHandler from "../EventHandler";
import type { EventHandlerType, ContainerState } from "../types";

type ContextType = {
  transitionPoint: number,
  navigationBarHeight: number,
  headerHeight: number,
  animatedValue: Animated.Value,
  containerEvents: EventHandlerType<ContainerState>
};

export const Context = React.createContext<ContextType>({
  transitionPoint: NAVIGATION_BAR_HEIGHT,
  navigationBarHeight: NAVIGATION_BAR_HEIGHT,
  headerHeight: 0,
  animatedValue: new Animated.Value(0),
  containerEvents: EventHandler()
});

export function ContextConsumer<Config: {}>(
  Component: React.AbstractComponent<Config>
) {
  return class extends React.Component {
    static contextType = Context;

    render() {
      const value = this.context;
      return <Component {...value} {...this.props} />;
    }
  };
}

export default Context;
