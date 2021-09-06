import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const WelcomeScreen: React.FC = () => {
  const [greeting, setGreeting] = React.useState<string | undefined>(undefined);
  if (greeting) {
    return (
      <View style={styles.greetingContainer}>
        <Text style={styles.text}>{greeting}!!!</Text>
      </View>
    );
  }
  return (
    <View testID="welcome" style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <TouchableOpacity
        testID="hello_button"
        onPress={() => setGreeting('Hello')}>
        <Text style={styles.text}>Say Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="world_button"
        onPress={() => setGreeting('World')}>
        <Text style={styles.text}>Say World</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="goodbye_button"
        onPress={() => setGreeting('Goodbye, World')}>
        <Text style={styles.text}>Say Goodbye</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 30,
    fontSize: 25,
  },
});

export default WelcomeScreen;
