import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, useColorScheme, View, Text} from 'react-native';

const LandingTwo = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View className="flex-1 w-full h-full bg-white items-center justify-center">
        <Text>Landing Two</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default LandingTwo;