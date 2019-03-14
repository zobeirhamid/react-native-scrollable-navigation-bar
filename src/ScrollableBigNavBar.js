import * as React from 'react';
import { Animated, View, StatusBar } from 'react-native';
import NavigationBar from './NavigationBar';
import BigNavigationBar from './BigNavigationBar';
import ImageNavigationBar from './ImageNavigationBar';

import { NAVIGATION_BAR_HEIGHT } from './constants';

class ScrollableBigNavBar extends React.Component {
  state = {
    reached: false
  };

  constructor(props) {
    super(props);
    if (props.animatedValue !== undefined) this.scroll = props.animatedValue;
    else this.scroll = new Animated.Value(0);
  }

  scrollListener(event) {
    const { y } = event.nativeEvent.contentOffset;
    const {
      height,
      onReached,
      onUnReached,
      navigationBarHeight = NAVIGATION_BAR_HEIGHT
    } = this.props;
    const { reached } = this.state;

    if (!reached && y >= height - navigationBarHeight) {
      this.setState({ reached: true });
      if (onReached !== undefined) onReached();
    }
    if (reached && y < height - navigationBarHeight) {
      this.setState({ reached: false });
      if (onUnReached !== undefined) onUnReached();
    }
  }

  render() {
    const {
      height,
      backgroundColor,
      borderColor,
      titleStyle,
      title,
      hideBigTitle,
      bigTitleStyle,
      increaseFontSize,
      children,
      withShadow,
      backButton = {},
      bigBackButton = {},
      image,
      ImageComponent,
      imageStyle,
      parallax,
      imageToNavBar,
      leftIcons,
      rightIcons,
      bigLeftIcons,
      bigRightIcons,
      statusBar,
      ScrollComponent = Animated.ScrollView,
      ListHeaderComponent,
      NavigationBarComponent = NavigationBar,
      navigationBarHeight = NAVIGATION_BAR_HEIGHT,
      withBigBorder
    } = this.props;
    const { reached } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar {...statusBar} />
        <NavigationBarComponent
          backgroundColor={
            image === undefined ? backgroundColor : 'transparent'
          }
          animatedValue={this.scroll}
          withShadow={withShadow}
          offset={height - navigationBarHeight}
          backButton={{ ...backButton, ...bigBackButton }}
          leftIcons={bigLeftIcons || leftIcons}
          rightIcons={bigRightIcons || rightIcons}
          navigationBarHeight={navigationBarHeight}
        />
        <NavigationBarComponent
          pointerEvents={reached ? 'auto' : 'none'}
          animatedValue={this.scroll}
          backgroundColor={backgroundColor}
          title={title}
          titleStyle={titleStyle}
          style={{
            borderBottomWidth: withBigBorder
              ? this.scroll.interpolate({
                  inputRange: [
                    height - navigationBarHeight - 1,
                    height - navigationBarHeight
                  ],
                  outputRange: [0, 1],
                  extrapolate: 'clamp'
                })
              : borderColor !== undefined
              ? 1
              : 0,
            borderBottomColor: borderColor,
            opacity: this.scroll.interpolate({
              inputRange: [
                height - (navigationBarHeight + 30),
                height - navigationBarHeight
              ],
              outputRange: [0, 1],
              extrapolate: 'clamp'
            })
          }}
          backButton={backButton}
          withShadow={withShadow}
          offset={height - navigationBarHeight}
          leftIcons={leftIcons}
          rightIcons={rightIcons}
          navigationBarHeight={navigationBarHeight}
        />
        <ScrollComponent
          nestedScrollEnabled
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
            {
              listener: this.scrollListener.bind(this),
              useNativeDriver: !(
                withShadow ||
                increaseFontSize ||
                imageToNavBar ||
                withBigBorder !== undefined
              )
            }
          )}
          ListHeaderComponent={() => (
            <View>
              {image !== undefined && (
                <ImageNavigationBar
                  animatedValue={this.scroll}
                  height={height}
                  image={image}
                  parallax={parallax}
                  imageToNavBar={imageToNavBar}
                  imageStyle={imageStyle}
                  ImageComponent={ImageComponent}
                  navigationBarHeight={navigationBarHeight}
                />
              )}
              <BigNavigationBar
                pointerEvents="none"
                animatedValue={this.scroll}
                height={height}
                backgroundColor="transparent"
                borderColor={withBigBorder ? borderColor : undefined}
                bigTitleStyle={bigTitleStyle}
                title={!hideBigTitle && title}
                increaseFontSize={increaseFontSize}
              />
              {ListHeaderComponent !== undefined && <ListHeaderComponent />}
            </View>
          )}
        >
          <View>
            {image !== undefined && (
              <ImageNavigationBar
                animatedValue={this.scroll}
                height={height}
                image={image}
                parallax={parallax}
                imageToNavBar={imageToNavBar}
                imageStyle={imageStyle}
                ImageComponent={ImageComponent}
                navigationBarHeight={navigationBarHeight}
              />
            )}
            <BigNavigationBar
              pointerEvents="none"
              animatedValue={this.scroll}
              height={height}
              backgroundColor="transparent"
              borderColor={withBigBorder ? borderColor : undefined}
              bigTitleStyle={bigTitleStyle}
              title={!hideBigTitle && title}
              increaseFontSize={increaseFontSize}
            />
            {ListHeaderComponent !== undefined && <ListHeaderComponent />}
          </View>
          {children}
        </ScrollComponent>
      </View>
    );
  }
}

export default ScrollableBigNavBar;
