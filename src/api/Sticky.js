// @flow
import * as React from 'react';
import { Animated, View } from 'react-native';
import Collapsible from './Collapsible';
import { ContextConsumer } from './Context';
import { NAVIGATION_BAR_HEIGHT } from '../constants';
import type { StickyProps } from '../types';

class Sticky extends React.Component<StickyProps> {
  static defaultProps = {
    collapsible: false,
    stayCollapsed: false,
    transitionPoint: NAVIGATION_BAR_HEIGHT,
    navigationBarHeight: NAVIGATION_BAR_HEIGHT
  };

  render() {
    const {
      children,
      style,
      collapsible,
      stayCollapsed,
      transitionPoint,
      animatedValue,
      navigationBarHeight
    }: StickyProps = this.props;
    return (
      <React.Fragment>
        <Collapsible active={collapsible} stayCollapsed={stayCollapsed}>
          <Animated.View
            pointerEvents="box-none"
            style={[
              {
                zIndex: 100,
                position: 'absolute',
                top: transitionPoint,
                bottom: 0,
                left: 0,
                right: 0,
                transform: [
                  {
                    translateY:
                      transitionPoint === navigationBarHeight
                        ? 0
                        : animatedValue.interpolate({
                            inputRange: [
                              0,
                              transitionPoint - navigationBarHeight
                            ],
                            outputRange: [
                              0,
                              -transitionPoint + navigationBarHeight
                            ],
                            extrapolateRight: 'clamp'
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
