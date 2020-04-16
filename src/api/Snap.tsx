import * as React from 'react';
import { Animated, View } from 'react-native';
import Context from './Context';

type SnapProps = {
  snapHeight?: number;
  children?: React.ReactNode;
};

const Snap: React.FC<SnapProps> = ({ snapHeight, children }) => {
  if (!snapHeight) return null;
  const { animatedValue } = React.useContext(Context);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    </View>
  );
};

export default Snap;
