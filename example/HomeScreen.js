import React from 'react';
import {Animated, View, Text, TouchableOpacity} from 'react-native';
import ScrollableNavigationBar, {
  BackButton,
  StatusBarComponent,
} from 'react-native-scrollable-navigation-bar';

export default class HomeScreen extends React.Component {
  renderLink(screen) {
    const {navigation} = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 24, fontWeight: '600'}}>{screen}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderHeader({title, titleStyle, animatedValue}) {
    return (
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: animatedValue.interpolate({
            inputRange: [110, 140],
            outputRange: [1, 0],
            extrapolateLeft: 'clamp',
          }),
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [-45, 0, 50],
                outputRange: [1.1, 1, 0.9],
                extrapolate: 'clamp',
              }),
            },
            {
              translateY: animatedValue.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [-0.2, 0, 0.7],
              }),
            },
          ],
        }}>
        <Text
          style={[
            {fontSize: 24, fontWeight: 'bold', color: 'white'},
            titleStyle,
          ]}>
          {title}
        </Text>
      </Animated.View>
    );
  }

  render() {
    const {navigation, screens, initialScreen = false, title} = this.props;
    return (
      <ScrollableNavigationBar
        transitionPoint={200}
        title={title}
        titleStyle={{color: 'white'}}
        headerBackgroundColor="dodgerblue"
        HeaderUnscrolledComponent={initialScreen ? () => null : undefined}
        HeaderScrolledComponent={initialScreen ? () => null : undefined}
        HeaderForegroundComponent={
          initialScreen ? props => this.renderHeader(props) : undefined
        }
        StatusBar={() => (
          <StatusBarComponent
            barStyle="light-content"
            backgroundColor="dodgerblue"
          />
        )}
        BackButton={() =>
          initialScreen ? null : (
            <BackButton onPress={() => navigation.goBack()} />
          )
        }>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 20,
          }}>
          {Object.keys(screens).map(navigationScreen =>
            this.renderLink(navigationScreen),
          )}
        </View>
      </ScrollableNavigationBar>
    );
  }
}
