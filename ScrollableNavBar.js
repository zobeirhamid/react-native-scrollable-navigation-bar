import * as React from 'react';
import { Animated, View, ScrollView, Text, StatusBar } from 'react-native';
import NavigationBar from './NavigationBar';
import BigNavigationBar from './BigNavigationBar';
import { NAVIGATION_BAR_HEIGHT } from './constants';

class ScrollableNavBar extends React.Component {
  scroll = new Animated.Value(0);

  render() {
    const {
      children,
      title,
      titleStyle,
      backgroundColor,
      borderColor,
      withShadow,
      backButton,
      leftIcons,
      rightIcons,
      statusBar,
      VirtualList = ScrollView
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar {...statusBar} />
        <NavigationBar
          title={title}
          titleStyle={titleStyle}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          animatedValue={this.scroll}
          withShadow={withShadow}
          backButton={backButton}
          leftIcons={leftIcons}
          rightIcons={rightIcons}
        />
        <VirtualList
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
            {
              useNativeDriver: !withShadow
            }
          )}
          contentContainerStyle={{
            paddingTop:
              NAVIGATION_BAR_HEIGHT +
              (this.props.contentContainerStyle !== undefined &&
              this.props.contentContainerStyle.paddingTop !== undefined
                ? this.props.contentContainerStylops.contentContainerStyle
                    .paddingTop
                : 0)
          }}
        >
          {children}
        </VirtualList>
      </View>
    );
  }
}

export default ScrollableNavBar;
