import * as React from "react";
import { Animated, View } from "react-native";
import Collapsible from "./Collapsible";
import Context from "./Context";
import { STATUS_BAR_HEIGHT } from "../constants";

export type NavigationBarContainerProps = {
  translucent?: boolean;
  collapsible?: boolean;
  stayCollapsed?: boolean;
  style?: object;
  children?: React.ReactNode;
};

const defaultProps = {
  backgroundColor: "transparent",
  pointerEvents: "box-none",
};

const NavigationBarContainer = ({
  backgroundColor,
  style,
  children,
  collapsible,
  stayCollapsed,
  pointerEvents,
}: NavigationBarContainerProps & typeof defaultProps) => {
  const { navigationBarHeight } = React.useContext(Context);
  return (
    <React.Fragment>
      <Collapsible
        active={collapsible}
        stayCollapsed={stayCollapsed}
        zIndex={10}
        height={navigationBarHeight - STATUS_BAR_HEIGHT}
      >
        <Animated.View
          pointerEvents={pointerEvents}
          style={[
            {
              zIndex: 10,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              backgroundColor,
              height: navigationBarHeight,
              transform: [
                {
                  translateY: 0,
                },
              ],
            },
            style,
          ]}
        >
          {children}
        </Animated.View>
      </Collapsible>
    </React.Fragment>
  );
};

NavigationBarContainer.defaultProps = defaultProps;

export default NavigationBarContainer;
