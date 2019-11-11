// @flow
import * as React from 'react';
import { Animated, View } from 'react-native';
import Collapsible from './Collapsible';
import { ContextConsumer } from './Context';
import { NAVIGATION_BAR_HEIGHT, STATUS_BAR_HEIGHT } from '../constants';
import type { NavigationBarContainerProps } from '../types';

class NavigationBarContainer extends React.Component<NavigationBarContainerProps> {
  static defaultProps = {
    backgroundColor: 'transparent',
    navigationBarHeight: NAVIGATION_BAR_HEIGHT,
    collapsible: false,
    stayCollapsed: false,
    translucent: false,
    style: {},
    pointerEvents: 'box-none'
  };

  render() {
    const {
      backgroundColor,
      translucent,
      style,
      children,
      collapsible,
      stayCollapsed,
      navigationBarHeight,
      animatedValue,
      pointerEvents
    } = this.props;
    return (
      <React.Fragment>
        <Collapsible
          active={collapsible}
          stayCollapsed={stayCollapsed}
          style={{ zIndex: 10 }}
          height={navigationBarHeight - STATUS_BAR_HEIGHT}
        >
          <Animated.View
            pointerEvents={pointerEvents}
            style={[
              {
                zIndex: 10,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor,
                height: navigationBarHeight,
                transform: [
                  {
                    translateY: animatedValue || 0
                  }
                ]
              },
              style
            ]}
          >
            {children}
          </Animated.View>
        </Collapsible>
        {!translucent && <View style={{ height: navigationBarHeight }} />}
      </React.Fragment>
    );
  }
}

export default ContextConsumer(NavigationBarContainer);
