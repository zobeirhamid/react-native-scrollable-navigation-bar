import * as React from 'react';
import { StatusBar as ReactNativeStatusBar, Animated } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';

function StatusBar() {
  const stack = [];

  function setBarStyle(barStyle) {
    if (barStyle === 'dark-content' || barStyle === 'light-content') {
      temp = currentBarStyle();
      lastStatusBarStack().push(barStyle);
      current = currentBarStyle();
      if (temp !== current) {
        ReactNativeStatusBar.setBarStyle(current);
      }
    }
  }

  function lastStatusBarStack() {
    return stack[stack.length - 1];
  }

  function lastBarStyle(statusBarStack) {
    return statusBarStack[statusBarStack.length - 1];
  }

  function currentBarStyle() {
    return lastBarStyle(lastStatusBarStack());
  }

  function newStatusBarComponent(barStyle) {
    stack.push([]);
    setBarStyle(barStyle);
  }

  function removeStatusBarComponent() {
    temp = currentBarStyle();
    stack.pop();
    current = currentBarStyle();
    if (temp !== current) {
      ReactNativeStatusBar.setBarStyle(current);
    }
  }

  function Component(props) {
    return <StatusBarComponent {...props} />;
  }

  return {
    setBarStyle,
    lastStatusBarStack,
    newStatusBarComponent,
    removeStatusBarComponent,
    Component
  };
}

const StatusBarInstance = StatusBar();

class StatusBarComponent extends React.Component {
  static defaultProps = {
    backgroundColor: 'transparent'
  };

  componentDidMount() {
    const { barStyle } = this.props;
    StatusBarInstance.newStatusBarComponent(barStyle);
  }

  componentWillUnmount() {
    StatusBarInstance.removeStatusBarComponent();
  }

  render() {
    const { backgroundColor } = this.props;
    return (
      <React.Fragment>
        <Animated.View
          style={{
            zIndex: 9999,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor,
            height: STATUS_BAR_HEIGHT
          }}
        />
      </React.Fragment>
    );
  }
}

export default StatusBarInstance;
