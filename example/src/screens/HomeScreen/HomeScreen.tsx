import {StackScreenProps} from '@react-navigation/stack';
import Box from 'library/components/Box/Box';
import Text from 'library/components/Text/Text';
import {RootStackParamList} from 'navigation/RootNavigation';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const HomeScreen: React.FC<StackScreenProps<RootStackParamList, 'HomeScreen'>> =
  ({navigation}) => {
    return (
      <Box flex={1} alignItems={'center'} justifyContent={'center'}>
        <TouchableOpacity
          testID="navigation_button"
          onPress={() => {
            navigation.navigate('WelcomeScreen');
          }}>
          <Text color={'primaryTextColor'}>Switch to Welcome Screen</Text>
        </TouchableOpacity>
      </Box>
    );
  };

HomeScreen.displayName = 'HomeScreen';

export default HomeScreen;
