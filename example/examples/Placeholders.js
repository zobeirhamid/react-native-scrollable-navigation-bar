// @flow
import * as React from 'react';
import {View, Text} from 'react-native';

export const Placeholder = () => (
  <View
    style={{
      height: 200,
      margin: 5,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text style={{fontWeight: 'bold', fontSize: 24, color: 'grey'}}>
      placeholder
    </Text>
  </View>
);

class Placeholders extends React.Component {
  render() {
    return (
      <View style={{padding: 5, flex: 1, backgroundColor: 'white'}}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </View>
    );
  }
}

export default Placeholders;
