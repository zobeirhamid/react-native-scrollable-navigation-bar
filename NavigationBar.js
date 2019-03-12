import * as React from 'react';
import { Animated, View, Text, StatusBar, Platform } from 'react-native';
import NavigationBarTitle from './NavigationBarTitle';
import BackButton from './BackButton';
import NavigationBarIcon from './NavigationBarIcon';

import { NAVIGATION_BAR_HEIGHT } from './constants';

class NavigationBar extends React.Component {
  renderIcons(icons, side) {
    if (icons === undefined) return null;
    return icons.map((Icon, index) => (
      <View key={`${side}-icons-index-${index}`}>{Icon}</View>
    ));
  }

  render() {
    const {
      animatedValue,
      title,
      titleStyle,
      backgroundColor,
      borderColor,
      style,
      collapsible,
      withShadow,
      offset,
      backButton,
      pointerEvents,
      leftIcons,
      rightIcons
    } = this.props;
    if (collapsible) {
      const minScroll = 100;

      const clampedScrollY = animatedValue.interpolate({
        inputRange: [minScroll, minScroll + 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp'
      });

      const minusScrollY = Animated.multiply(clampedScrollY, -1);

      const translateY = Animated.diffClamp(
        minusScrollY,
        -NAVIGATION_BAR_HEIGHT,
        0
      );
    }
    return (
      <Animated.View
        pointerEvents={pointerEvents}
        style={{
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          height: NAVIGATION_BAR_HEIGHT,
          shadowRadius: 5,
          shadowColor: '#000',
          shadowOffset: { height: 8, width: 0 },
          shadowOpacity: withShadow
            ? animatedValue.interpolate({
                inputRange: [offset || 0, offset ? offset + 20 : 20],
                outputRange: [0, 0.15],
                extrapolate: 'clamp'
              })
            : 0,
          elevation: 5
        }}
      >
        <Animated.View
          style={[
            {
              backgroundColor,
              flex: 1,
              borderBottomWidth: borderColor !== undefined ? 1 : 0,
              borderBottomColor: borderColor,
              transform: collapsible ? [{ translateY }] : undefined
            },
            style
          ]}
        >
          <View
            style={{
              paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <BackButton {...backButton} />
              {this.renderIcons(leftIcons, 'left')}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              {this.renderIcons(rightIcons, 'right')}
            </View>
            <NavigationBarTitle titleStyle={titleStyle}>
              {title}
            </NavigationBarTitle>
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
}

export default NavigationBar;
