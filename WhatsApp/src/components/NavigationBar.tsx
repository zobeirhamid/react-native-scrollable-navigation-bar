import React from 'react';
import {View, Text} from 'react-native';

const primaryColor = 'rgb(14, 94, 84)';

const NavigationBar = () => {
  return (
    <React.Fragment>
      <View style={{height: 20}} />
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
          backgroundColor: primaryColor,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 18,
            textShadowColor: 'rgba(0,0,0, 0.1)',
            textShadowRadius: 10,
          }}>
          WhatsApp
        </Text>
      </View>
    </React.Fragment>
  );
};

export default NavigationBar;
