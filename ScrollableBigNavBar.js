import * as React from 'react';
import { Animated, View, StatusBar } from 'react-native';
import NavigationBar from './NavigationBar';
import BigNavigationBar from './BigNavigationBar';
import ImageNavigationBar from './ImageNavigationBar';

import { NAVIGATION_BAR_HEIGHT } from './constants';

class ScrollableBigNavBar extends React.Component {
  scroll = new Animated.Value(0);

  state = {
    reached: false
  };

  scrollListener(event) {
    const { y } = event.nativeEvent.contentOffset;
    const { height, onReached, onUnReached } = this.props;
    const { reached } = this.state;

    if (!reached && y >= height - NAVIGATION_BAR_HEIGHT) {
      this.setState({ reached: true });
      if (onReached) onReached();
    }
    if (reached && y < height - NAVIGATION_BAR_HEIGHT) {
      this.setState({ reached: false });
      if (onUnReached) onUnReached();
    }
  }

  renderVirtualList() {
    const {
      height,
      borderColor,
      bigTitleStyle,
      title,
      withShadow,
      increaseFontSize,
      imageToNavBar,
      VirtualList
    } = this.props;
    return (
      <VirtualList
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
          {
            listener: this.scrollListener.bind(this),
            useNativeDriver: !(withShadow || increaseFontSize || imageToNavBar)
          }
        )}
        ListHeaderComponent={() => (
          <BigNavigationBar
            animatedValue={this.scroll}
            height={height}
            backgroundColor="transparent"
            borderColor={borderColor}
            bigTitleStyle={bigTitleStyle}
            title={title}
            increaseFontSize={increaseFontSize}
          />
        )}
      />
    );
  }

  renderScrollView() {
    const {
      children,
      height,
      borderColor,
      bigTitleStyle,
      title,
      withShadow,
      increaseFontSize,
      imageToNavBar
    } = this.props;
    return (
      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
          {
            listener: this.scrollListener.bind(this),
            useNativeDriver: !(withShadow || increaseFontSize || imageToNavBar)
          }
        )}
      >
        <BigNavigationBar
          animatedValue={this.scroll}
          height={height}
          backgroundColor="transparent"
          borderColor={borderColor}
          bigTitleStyle={bigTitleStyle}
          title={title}
          increaseFontSize={increaseFontSize}
        />
        {children}
      </Animated.ScrollView>
    );
  }

  render() {
    const {
      height,
      backgroundColor,
      borderColor,
      titleStyle,
      title,
      withShadow,
      backButton = {},
      bigBackButton = {},
      image,
      imageStyle,
      parallax,
      imageToNavBar,
      leftIcons,
      rightIcons,
      bigLeftIcons,
      bigRightIcons,
      statusBar,
      VirtualList
    } = this.props;
    const { reached } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar {...statusBar} />
        <NavigationBar
          backgroundColor={
            image === undefined ? backgroundColor : 'transparent'
          }
          animatedValue={this.scroll}
          withShadow={withShadow}
          offset={height - NAVIGATION_BAR_HEIGHT}
          backButton={{ ...backButton, ...bigBackButton }}
          leftIcons={bigLeftIcons || leftIcons}
          rightIcons={bigRightIcons || rightIcons}
        />
        <NavigationBar
          pointerEvents={reached ? 'auto' : 'none'}
          animatedValue={this.scroll}
          backgroundColor={backgroundColor}
          title={title}
          titleStyle={[titleStyle]}
          style={{
            borderBottomWidth: borderColor !== undefined && reached ? 1 : 0,
            borderBottomColor: borderColor,
            opacity: this.scroll.interpolate({
              inputRange: [
                height - (NAVIGATION_BAR_HEIGHT + 10),
                height - NAVIGATION_BAR_HEIGHT
              ],
              outputRange: [0, 1],
              extrapolate: 'clamp'
            })
          }}
          backButton={backButton}
          withShadow={withShadow}
          offset={height - NAVIGATION_BAR_HEIGHT}
          leftIcons={leftIcons}
          rightIcons={rightIcons}
        />
        {image !== undefined && (
          <ImageNavigationBar
            animatedValue={this.scroll}
            height={height}
            image={image}
            parallax={parallax}
            imageToNavBar={imageToNavBar}
            imageStyle={imageStyle}
          />
        )}
        {VirtualList !== undefined
          ? this.renderVirtualList()
          : this.renderScrollView()}
      </View>
    );
  }
}

export default ScrollableBigNavBar;
