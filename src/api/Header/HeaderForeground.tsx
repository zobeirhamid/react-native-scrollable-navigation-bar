import * as React from 'react';
import Animated from 'react-native-reanimated';
import {useContainer} from '../Context';

type HeaderForegroundProps = {
  children?: React.ReactNode;
};

const HeaderForeground: React.FC<HeaderForegroundProps> = (props) => {
  const {children} = props;
  const {headerHeight} = useContainer(props);

  return (
    <Animated.View
      pointerEvents="box-none"
      style={{
        zIndex: 1000,
        height: headerHeight,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      {children}
    </Animated.View>
  );
};

export default HeaderForeground;
