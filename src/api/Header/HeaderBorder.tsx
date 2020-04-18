import * as React from 'react';
import {View} from 'react-native';
import Sticky from '../Sticky';
import Context, {ReachedTransitionPointContext} from '../Context';

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
  const {navigationBarHeight} = React.useContext(Context);
  const {hasReachedTransitionPoint} = React.useContext(
    ReachedTransitionPointContext,
  );

  if (borderColor === undefined) return null;
  return (
    <Sticky
      collapsible={collapsible}
      stayCollapsed={stayCollapsed}
      collapseHeight={navigationBarHeight}>
      <View
        style={{
          height: 1,
          backgroundColor: hasReachedTransitionPoint
            ? borderColor
            : headerBorderColor || borderColor,
        }}
      />
    </Sticky>
  );
};

export default HeaderBorder;
