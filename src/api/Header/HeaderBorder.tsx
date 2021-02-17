import * as React from 'react';
import {View, Animated} from 'react-native';
import Sticky from '../Sticky';
import Context, {ReachedTransitionPointContext} from '../Context';
import {Extrapolate} from 'react-native-reanimated';

type HeaderBorderProps = {
  borderColor?: string;
  headerBorderColor?: string;
  collapsible?: boolean;
  stayCollapsed?: boolean;
};

const HeaderBorder: React.FC<HeaderBorderProps> = ({
  borderColor,
  headerBorderColor,
  collapsible,
  stayCollapsed,
}) => {
  const {navigationBarHeight, animatedValue, offset} = React.useContext(
    Context,
  );
  const {hasReachedTransitionPoint} = React.useContext(
    ReachedTransitionPointContext,
  );

  if (borderColor === undefined) return null;
  return (
    <Sticky
      collapsible={collapsible}
      stayCollapsed={stayCollapsed}
      collapseHeight={navigationBarHeight}>
      <Animated.View
        style={{
          height: 1,
          backgroundColor: hasReachedTransitionPoint
            ? borderColor
            : headerBorderColor || borderColor,

          transform: [
            {
              translateY:
                offset !== 0
                  ? animatedValue.interpolate({
                      inputRange: [0, offset],
                      outputRange: [offset, 0],
                      extrapolate: Extrapolate.CLAMP,
                    })
                  : 0,
            },
          ],
        }}
      />
    </Sticky>
  );
};

export default HeaderBorder;
