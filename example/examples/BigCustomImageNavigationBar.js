import React from 'react';
import { Animated, View, ScrollView } from 'react-native';
import BigImageNavigationBar from './BigImageNavigationBar';

class BigCustomImageNavigationBar extends React.Component {
  render() {
    return (
      <BigImageNavigationBar
        ImageComponent={props => (
          <Animated.View {...props}>
            <ScrollView pagingEnabled horizontal>
              <Animated.Image
                source={props.source}
                style={[{ height: props.imageHeight }, props.imageStyle]}
              />
              <Animated.Image
                source={props.source}
                style={[{ height: props.imageHeight }, props.imageStyle]}
              />
            </ScrollView>
          </Animated.View>
        )}
        {...this.props}
      />
    );
  }
}

export default BigCustomImageNavigationBar;
