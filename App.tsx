import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/routes/RootNavigation';
import {navigationRef, isReadyNavigationRef} from './src/lib/navigation';
import './global.css';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyNavigationRef.current = true;
          }}>
          <RootNavigation />
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
