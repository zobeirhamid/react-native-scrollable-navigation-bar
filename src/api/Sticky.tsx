import * as React from 'react';
import { Animated, View } from 'react-native';
import Collapsible from './Collapsible';
import Context from './Context';

export type StickyProps = {
  children?: React.ReactNode;
  style?: object;
  collapsible?: boolean;
  stayCollapsed?: boolean;
  height?: number;
};

const Sticky: React.FC<StickyProps> = ({
  children,
  style,
  collapsible,
  stayCollapsed,
  height,
}) => {
  const {
    transitionPoint,
    animatedValue,
    navigationBarHeight,
  } = React.useContext(Context);
  return (
    <React.Fragment>
      <Collapsible
        active={collapsible}
        stayCollapsed={stayCollapsed}
        height={height}>
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
                  translateY: animatedValue.interpolate({
                    inputRange: [
                      transitionPoint - navigationBarHeight,
                      transitionPoint - navigationBarHeight + 1,
                    ],
                    outputRange: [0, 1],
                    extrapolateLeft:
                      transitionPoint === navigationBarHeight
                        ? 'extend'
                        : 'clamp',
                  }),
                },
              ],
            },
            style,
          ]}>
          {children}
        </Animated.View>
      </Collapsible>
      <View style={{ opacity: 0 }} pointerEvents="none">
        {children}
      </View>
    </React.Fragment>
  );
};

export default Sticky;
