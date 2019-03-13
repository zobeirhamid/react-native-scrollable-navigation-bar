import React from 'react';
import { View, FlatList, Text, Animated } from 'react-native';
import BigImageToNavigationBar from './BigImageToNavigationBar';

function PlaceHolder() {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginHorizontal: 15
      }}
    />
  );
}

class BigNavigationBarCustomTitle extends React.Component {
  scroll = new Animated.Value(0);

  state = {
    titleStyle: {}
  };

  render() {
    const { titleStyle } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <BigImageToNavigationBar
          animatedValue={this.scroll}
          hideBigTitle
          ScrollComponent={undefined}
          titleStyle={titleStyle}
          {...this.props}
        >
          <View
            onLayout={event => {
              const { x, y, width, height } = event.nativeEvent.layout;
              this.setState({
                titleStyle: {
                  opacity: this.scroll.interpolate({
                    inputRange: [y - height, y - height + 30],
                    outputRange: [0, 1],
                    extrapolate: 'clamp'
                  })
                }
              });
            }}
            style={{ margin: 15 }}
          >
            <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Title</Text>
          </View>
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
        </BigImageToNavigationBar>
      </View>
    );
  }
}

export default BigNavigationBarCustomTitle;
