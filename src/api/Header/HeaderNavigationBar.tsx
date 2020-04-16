import * as React from 'react';
import { View } from 'react-native';
import { appear } from '../hoc';
import NavigationBarContainer from '../NavigationBarContainer';
import Context, { ReachedTransitionPointContext } from '../Context';

type HeaderNavigationBarProps = {
  backgroundColor?: string;
  UnscrolledNavigationBar?: React.FC;
  ScrolledNavigationBar?: React.FC<{ backgroundColor?: string }>;
  collapsible?: boolean;
  stayCollapsed?: boolean;
};

const HeaderNavigationBar: React.FC<HeaderNavigationBarProps> = ({
  backgroundColor,
  UnscrolledNavigationBar,
  ScrolledNavigationBar,
  collapsible,
  stayCollapsed,
}) => {
  const {
    transitionPoint,
    animatedValue,
    navigationBarHeight,
  } = React.useContext(Context);

  const { hasReachedTransitionPoint } = React.useContext(
    ReachedTransitionPointContext,
  );

  return (
    <View
      pointerEvents="box-none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
      }}>
      <NavigationBarContainer
        translucent
        style={{ zIndex: 1 }}
        collapsible={collapsible}
        stayCollapsed={stayCollapsed}>
        {UnscrolledNavigationBar !== undefined && <UnscrolledNavigationBar />}
      </NavigationBarContainer>
      {appear(
        <NavigationBarContainer
          translucent
          style={{ zIndex: 2 }}
          collapsible={collapsible}
          stayCollapsed={stayCollapsed}
          pointerEvents={
            hasReachedTransitionPoint === true ? 'box-none' : 'none'
          }>
          {ScrolledNavigationBar !== undefined && (
            <ScrolledNavigationBar backgroundColor={backgroundColor} />
          )}
        </NavigationBarContainer>,
        animatedValue,
        transitionPoint - (navigationBarHeight + 30),
        transitionPoint - navigationBarHeight,
      )}
    </View>
  );
};

export default HeaderNavigationBar;
