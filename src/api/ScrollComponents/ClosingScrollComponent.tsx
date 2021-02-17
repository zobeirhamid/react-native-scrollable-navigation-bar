import React from 'react';
import {useWindowDimensions} from 'react-native';
import SnappingScrollComponent from './SnappingScrollComponent';
const ClosingScrollComponent = props => {
  const {height} = useWindowDimensions();
  const {onSnap, snapToOffsets, onClose, offset = height} = props;

  const mappedSnapToOffsets = React.useMemo(() => {
    if (offset === 0) return snapToOffsets;
    return [0, ...snapToOffsets.map(e => e + offset)];
  }, [offset, snapToOffsets]);

  const extendedOnSnap = React.useMemo(() => {
    if (offset === 0) return onSnap;
    return index => {
      if (index == 0) {
        onClose();
      } else {
        if (onSnap !== undefined) {
          onSnap(index - 1);
        }
      }
    };
  }, [offset, onSnap, onClose]);

  return (
    <SnappingScrollComponent
      {...props}
      snapToOffsets={mappedSnapToOffsets}
      onSnap={extendedOnSnap}
      scrollViewContainerStyle={{marginTop: offset}}
      headerStyle={{marginTop: offset}}
      bounces={false}
      contentOffset={{y: offset, x: 0}}
      style={{marginTop: -offset}}
    />
  );
};

export default ClosingScrollComponent;
