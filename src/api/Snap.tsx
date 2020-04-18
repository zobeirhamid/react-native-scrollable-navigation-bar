import * as React from 'react';
import {Animated, View} from 'react-native';
import Context from './Context';
import Sticky from './Sticky';

type SnapProps = {
  snapHeight?: number;
  children?: React.ReactNode;
  backgroundColor?: string;
};

const Snap: React.FC<SnapProps> = ({snapHeight, backgroundColor, children}) => {
  if (!snapHeight) return null;
  const {animatedValue, headerHeight} = React.useContext(Context);
  return (
    <React.Fragment>
      <Sticky>
        <Animated.View
          style={{
            opacity: animatedValue.interpolate({
              inputRange: [0, snapHeight],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                scaleY: animatedValue.interpolate({
                  inputRange: [0, snapHeight],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          {children}
        </Animated.View>
      </Sticky>
      <Sticky zIndex={-1}>
        <View
          style={{
            backgroundColor,
            height: snapHeight,
          }}
        />
      </Sticky>
    </React.Fragment>
  );
};

export default Snap;
