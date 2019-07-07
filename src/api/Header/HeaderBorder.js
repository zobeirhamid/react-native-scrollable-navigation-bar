// @flow
import * as React from 'react';
import { View } from 'react-native';
import Sticky from '../Sticky';
import type { HeaderBorderProps } from '../../types';

class HeaderBorder extends React.Component<HeaderBorderProps> {
  render() {
    const {
      borderColor,
      collapsible = false,
      stayCollapsed = false
    } = this.props;

    if (borderColor === undefined) return null;
    return (
      <Sticky collapsible={collapsible} stayCollapsed={stayCollapsed}>
        <View style={{ height: 1, backgroundColor: borderColor }} />
      </Sticky>
    );
  }
}

export default HeaderBorder;
