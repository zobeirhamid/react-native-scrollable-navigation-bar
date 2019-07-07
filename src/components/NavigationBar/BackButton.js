// @flow
import * as React from 'react';
import NavigationBarIcon from './NavigationBarIcon';
import type { BackButtonProps } from '../../types';

export default class BackButton extends React.Component<BackButtonProps> {
  static defaultProps = {
    visible: true
  };

  render() {
    const { onPress, style, visible } = this.props;
    if (!visible) return null;
    return (
      <NavigationBarIcon
        name="ios-arrow-back"
        style={style}
        onPress={onPress}
      />
    );
  }
}
