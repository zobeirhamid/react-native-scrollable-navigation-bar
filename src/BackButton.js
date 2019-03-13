import React, { Component } from 'react';
import NavigationBarIcon from './NavigationBarIcon';

export default class BackButton extends Component {
  render() {
    const { onPress, style, visible } = this.props;
    if (!visible) return null;
    return (
      <NavigationBarIcon name="arrow-back" style={style} onPress={onPress} />
    );
  }
}
