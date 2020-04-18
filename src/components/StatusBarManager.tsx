import * as React from 'react';
import {
  StatusBar as ReactNativeStatusBar,
  Animated,
  StatusBarStyle,
  StatusBarProperties,
} from 'react-native';
import {STATUS_BAR_HEIGHT} from '../constants';

function StatusBarManager() {
  const stack: Array<Array<StatusBarStyle>> = [];

  function setBarStyle(barStyle: StatusBarStyle) {
    if (barStyle === 'dark-content' || barStyle === 'light-content') {
      const temp = currentBarStyle();
      lastStatusBarStack().push(barStyle);
      const current = currentBarStyle();
      if (temp !== current) {
        ReactNativeStatusBar.setBarStyle(current);
      }
    }
  }

  function lastStatusBarStack(): Array<StatusBarStyle> {
    return stack[stack.length - 1];
  }

  function lastBarStyle(statusBarStack: Array<StatusBarStyle>): StatusBarStyle {
    return statusBarStack && statusBarStack[statusBarStack.length - 1];
  }

  function currentBarStyle(): StatusBarStyle {
    return lastBarStyle(lastStatusBarStack());
  }

  function newStatusBarComponent(barStyle: StatusBarStyle) {
    stack.push([]);
    setBarStyle(barStyle);
  }

  function removeStatusBarComponent() {
    const temp = currentBarStyle();
    stack.pop();
    const current = currentBarStyle();
    if (temp !== current) {
      ReactNativeStatusBar.setBarStyle(current);
    }
  }

  const Component = React.memo((props: StatusBarProperties) => {
    const {backgroundColor = 'transparent'} = props;

    React.useEffect(() => {
      const {barStyle} = props;
      if (barStyle !== undefined) {
        StatusBarInstance.newStatusBarComponent(barStyle);
        return StatusBarInstance.removeStatusBarComponent;
      }
    });

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
            height: STATUS_BAR_HEIGHT,
          }}
        />
      </React.Fragment>
    );
  });

  return {
    setBarStyle,
    lastStatusBarStack,
    newStatusBarComponent,
    removeStatusBarComponent,
    Component,
  };
}

const StatusBarInstance = StatusBarManager();

export default StatusBarInstance;
