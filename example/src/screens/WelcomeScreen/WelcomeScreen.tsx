import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const WelcomeScreen: React.FC = () => {
  const [greeting, setGreeting] = React.useState<string | undefined>(undefined);
  if (greeting) {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>{greeting}!!!</Text>
      </View>
    );
  }
  return (
    <View
      testID="welcome"
      style={{
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 25, marginBottom: 30}}>Welcome</Text>
      <TouchableOpacity
        testID="hello_button"
        onPress={() => setGreeting('Hello')}>
        <Text style={{color: 'white', marginBottom: 20}}>Say Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="world_button"
        onPress={() => setGreeting('World')}>
        <Text style={{color: 'white', marginBottom: 20}}>Say World</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="goodbye_button"
        onPress={() => setGreeting('Goodbye, World')}>
        <Text style={{color: 'white', marginTop: 50, marginBottom: 20}}>
          Say Goodbye
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
