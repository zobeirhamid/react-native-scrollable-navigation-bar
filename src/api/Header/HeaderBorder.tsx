import * as React from 'react';
import {View} from 'react-native';
import Sticky from '../Sticky';
import {ReachedTransitionPointContext, useContainer} from '../Context';

type HeaderBorderProps = {
  borderColor?: string;
  headerBorderColor?: string;
  collapsible?: boolean;
  stayCollapsed?: boolean;
};

const HeaderBorder: React.FC<HeaderBorderProps> = (props) => {
  const {borderColor, headerBorderColor, collapsible, stayCollapsed} = props;
  const {navigationBarHeight} = useContainer(props);
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
