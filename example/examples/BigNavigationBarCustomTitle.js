import React from 'react';
import { View, FlatList, Text, Animated } from 'react-native';
import BigImageToNavigationBar from './BigImageToNavigationBar';

class BigNavigationBarCustomTitle extends React.Component {
  scroll = new Animated.Value(0);

  state = {
    titleStyle: {},
    rendered: false
  };

  render() {
    const { titleStyle, rendered } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <BigImageToNavigationBar
          animatedValue={this.scroll}
          hideBigTitle
          ListHeaderComponent={() => (
            <View
              onLayout={
                rendered
                  ? () => {}
                  : event => {
                      const { x, y, width, height } = event.nativeEvent.layout;
                      this.setState({
                        rendered: true,
                        titleStyle: {
                          opacity: this.scroll.interpolate({
                            inputRange: [y - height + 30, y - height + 60],
                            outputRange: [0, 1],
                            extrapolate: 'clamp'
                          })
                        }
                      });
                    }
              }
              style={{ padding: 15, backgroundColor: 'white' }}
            >
              <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Title</Text>
            </View>
          )}
          titleStyle={titleStyle}
          {...this.props}
        />
      </View>
    );
  }
}

export default BigNavigationBarCustomTitle;
