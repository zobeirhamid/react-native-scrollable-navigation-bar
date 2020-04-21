import * as React from 'react';
import Animated, {Extrapolate} from 'react-native-reanimated';
import Collapsible from './Collapsible';
import {useContainer} from './Context';

export type StickyProps = {
  children?: React.ReactNode;
  style?: object;
  collapsible?: boolean;
  stayCollapsed?: boolean;
  collapseHeight?: number;
  zIndex?: number;
};

const Sticky: React.FC<StickyProps> = (props) => {
  const {
    children,
    style,
    collapsible,
    stayCollapsed,
    collapseHeight,
    zIndex = 1,
  } = props;

  const {headerHeight, animatedValue, navigationBarHeight} = useContainer(
    props,
  );

  return (
    <React.Fragment>
      <Collapsible
        zIndex={zIndex}
        active={collapsible}
        stayCollapsed={stayCollapsed}
        height={collapseHeight}>
        <Animated.View
          pointerEvents="box-none"
          style={[
            {
              zIndex,
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              transform: [
                {
                  translateY:
                    headerHeight !== navigationBarHeight
                      ? animatedValue.interpolate({
                          inputRange: [0, headerHeight - navigationBarHeight],
                          outputRange: [headerHeight, navigationBarHeight],
                          extrapolateRight: Extrapolate.CLAMP,
                        })
                      : headerHeight,
                },
              ],
            },
            style,
          ]}>
          {children}
        </Animated.View>
      </Collapsible>
    </React.Fragment>
  );
};

export default Sticky;
