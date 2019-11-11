// @flow
import * as React from "react";
import { StatusBar, Animated, Platform } from "react-native";
import { STATUS_BAR_HEIGHT } from "../constants";
import type { StatusBarComponentProps } from "../types";

class StatusBarComponent extends React.Component<StatusBarComponentProps> {
  static defaultProps = {
    backgroundColor: "transparent"
  };

  render() {
    const { backgroundColor } = this.props;
    return (
      <React.Fragment>
        <Animated.View
          style={{
            zIndex: 9999,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor,
            height: STATUS_BAR_HEIGHT
          }}
        />
        <StatusBar
          {...this.props}
          translucent={Platform.OS === "android"}
          backgroundColor="transparent"
        />
      </React.Fragment>
    );
  }
}

export default StatusBarComponent;
