// @flow
import * as React from 'react';
import { Animated, View } from 'react-native';
import Container from './Container';
import { STATUS_BAR_HEIGHT, NAVIGATION_BAR_HEIGHT } from '../constants';
import type {
  ContainerProps,
  ContainerDefaultProps,
  SearchContainerState
} from '../types';

class SearchContainer extends React.Component<
  ContainerProps,
  SearchContainerState
> {
  static defaultProps: ContainerDefaultProps = {
    ...Container.defaultProps,
    headerHeight: NAVIGATION_BAR_HEIGHT
  };

  state = {
    searchActive: false
  };

  searchAnimatedValue = new Animated.Value(0);

  onFocus(): void {
    // Super Buggy for SearchRegularNavigationBar
    // this.setState({ searchActive: true });
    Animated.timing(this.searchAnimatedValue, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }

  onBlur(): void {
    //   this.setState({ searchActive: false });
    Animated.timing(this.searchAnimatedValue, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { children, style, headerHeight, contentContainerStyle } = this.props;
    const { searchActive } = this.state;
    const translateStyle = {
      transform: [
        {
          translateY: Animated.multiply(
            STATUS_BAR_HEIGHT - headerHeight,
            this.searchAnimatedValue
          )
        }
      ]
    };

    const customStyle =
      Platform.OS === 'ios'
        ? { style: [translateStyle, style] }
        : { contentContainerStyle: [translateStyle, contentContainerStyle] };

    return (
      <Container {...this.props} scrollEnabled={!searchActive} {...customStyle}>
        <View>
          <Animated.View
            pointerEvents="none"
            style={{
              zIndex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: Animated.multiply(this.searchAnimatedValue, 0.5),
              backgroundColor: 'black'
            }}
          />
          {children}
        </View>
      </Container>
    );
  }
}

export default SearchContainer;
