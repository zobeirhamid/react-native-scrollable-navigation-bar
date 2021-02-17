import React from 'react';
import RegularScrollComponent from './RegularScrollComponent';
const SnappingScrollComponent = props => {
  const [dragging, setDragging] = React.useState(false);
  const {onSnap, snapToOffsets, decelerationRate = 'fast'} = props;

  const onScrollBeginDrag = React.useMemo(() => {
    return () => {
      if (snapToOffsets !== undefined) {
        setDragging(true);
      }
    };
  }, [snapToOffsets]);

  const onMomentumScrollEnd = React.useMemo(() => {
    return e => {
      if (dragging && snapToOffsets !== undefined) {
        const y = e.nativeEvent.contentOffset.y;
        const value = snapToOffsets.reduce((prev, curr) => {
          return Math.abs(curr - y) < Math.abs(prev - y) ? curr : prev;
        });

        onSnap(snapToOffsets.indexOf(value));
        setDragging(false);
      }
    };
  }, [dragging, onSnap, snapToOffsets]);

  return (
    <RegularScrollComponent
      {...props}
      onMomentumScrollEnd={onMomentumScrollEnd}
      onScrollBeginDrag={onScrollBeginDrag}
      decelerationRate={decelerationRate}
      disableIntervalMomentum
      directionalLockEnabled
    />
  );
};

export default SnappingScrollComponent;
