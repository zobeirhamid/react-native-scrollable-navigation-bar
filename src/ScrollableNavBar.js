import * as React from 'react';
import { Animated, View, ScrollView, Text, StatusBar } from 'react-native';
import NavigationBar from './NavigationBar';
import BigNavigationBar from './BigNavigationBar';
import { NAVIGATION_BAR_HEIGHT } from './constants';

class ScrollableNavBar extends React.Component {
  state = {
    sticked: false
  };

  constructor(props) {
    super(props);
    if (props.animatedValue !== undefined) this.scroll = props.animatedValue;
    else this.scroll = new Animated.Value(0);
  }

  scrollListener(event) {
    const { y } = event.nativeEvent.contentOffset;
    const { onSticky, onUnSticky } = this.props;
    const { sticked } = this.state;

    if (!sticked && y >= NAVIGATION_BAR_HEIGHT) {
      this.setState({ sticked: true });
      if (onSticky !== undefined) onSticky();
    }
    if (sticked && y < NAVIGATION_BAR_HEIGHT) {
      this.setState({ sticked: false });
      if (onUnSticky !== undefined) onUnSticky();
    }
  }

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
      ScrollComponent = ScrollView,
      NavigationBarComponent = NavigationBar,
      stickyHeight = 0
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar {...statusBar} />
        <NavigationBarComponent
          title={title}
          titleStyle={titleStyle}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          animatedValue={this.scroll}
          withShadow={withShadow}
          backButton={backButton}
          leftIcons={leftIcons}
          rightIcons={rightIcons}
          stickyHeight={stickyHeight}
        />
        <ScrollComponent
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
            {
              listener:
                stickyHeight !== 0 ? this.scrollListener.bind(this) : undefined,
              useNativeDriver: !withShadow
            }
          )}
          contentContainerStyle={{
            paddingTop:
              NAVIGATION_BAR_HEIGHT +
              stickyHeight +
              (this.props.contentContainerStyle !== undefined &&
              this.props.contentContainerStyle.paddingTop !== undefined
                ? this.props.contentContainerStyle.paddingTop
                : 0)
          }}
        >
          {children}
        </ScrollComponent>
      </View>
    );
  }
}

export default ScrollableNavBar;
