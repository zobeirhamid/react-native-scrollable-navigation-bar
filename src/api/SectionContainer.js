// @flow
import * as React from 'react';
import { Animated } from 'react-native';
import Container from './Container';
import type { ContainerProps, ContainerDefaultProps } from '../types';

class SectionContainer extends React.Component<ContainerProps> {
  static defaultProps: ContainerDefaultProps = Container.defaultProps;

  render() {
    const { style, transitionPoint, navigationBarHeight } = this.props;

    return (
      <React.Fragment>
        <Container
          {...this.props}
          style={[
            {
              paddingTop: navigationBarHeight,
              transform: []
            },
            style
          ]}
          contentContainerStyle={{ transform: [] }}
          ListHeaderComponent={() => (
            <Animated.View
              style={{ height: transitionPoint - navigationBarHeight }}
            />
          )}
          ListFooterComponent={() => (
            <Animated.View style={{ height: navigationBarHeight }} />
          )}
        />
      </React.Fragment>
    );
  }
}

export default SectionContainer;
