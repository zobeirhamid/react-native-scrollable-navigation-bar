// @flow
import * as React from 'react';
import { View } from 'react-native';
import Sticky from '../Sticky';
import type { HeaderBorderProps } from '../../types';
import { ContextConsumer } from '../Context';

class HeaderBorder extends React.Component<HeaderBorderProps> {
  state = {
    reachedTransitionPoint: false
  };

  componentDidMount() {
    const { containerEvents } = this.props;
    containerEvents.listen(({ reachedTransitionPoint }) => {
      this.setState({ reachedTransitionPoint });
    });
  }

  render() {
    const {
      borderColor,
      headerBorderColor,
      collapsible = false,
      stayCollapsed = false,
      navigationBarHeight
    } = this.props;

    const { reachedTransitionPoint } = this.state;

    if (borderColor === undefined) return null;
    return (
      <Sticky
        collapsible={collapsible}
        stayCollapsed={stayCollapsed}
        height={navigationBarHeight}
      >
        <View
          style={{
            height: 1,
            backgroundColor: reachedTransitionPoint
              ? borderColor
              : headerBorderColor
          }}
        />
      </Sticky>
    );
  }
}

export default ContextConsumer(HeaderBorder);
