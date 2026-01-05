import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import DashBoard from '../screens/DashBoard/DashBoard';

type AppStackParamList = {
  Main: undefined;
  DashBoard: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => (
  <Stack.Navigator
    initialRouteName="Main"
    // headerMode="screen"
   screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="Main"
      component={BottomNavigation}
      // options={{
      //   // gesturesEnabled: false,
      //   headerShown: false,
      //   headerStyle: {
      //     backgroundColor: '#106bce'
      //   }
      // }}
    />
    <Stack.Screen
      name="DashBoard"
      component={DashBoard}
      // options={{
      //   // gesturesEnabled: false,
      //   headerShown: false,
      //   headerStyle: {
      //     backgroundColor: '#106bce'
      //   }
      // }}
    />
  </Stack.Navigator>
);

export default AppStack;
