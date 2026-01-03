/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
// import TestIcon from '../../../assets/test.svg';
import IconSvg from '../../components/IconSvg';

function Landing() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {

  return (
    <View style={styles.container}>
      <Text>Nueve App Landing</Text>
      {/* <TestIcon /> */}
      <IconSvg name="home" width={24} height={24} fill="#111827" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Landing;
