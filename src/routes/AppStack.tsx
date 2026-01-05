import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import Landing from '../screens/Dashboard/Landing';
import LandingTwo from '../screens/Dashboard/LandingTwo';

type AppStackParamList = {
  Main: undefined;
  Landing: undefined;
  LandingTwo: undefined;
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
      name="Landing"
      component={Landing}
      // options={{
      //   // gesturesEnabled: false,
      //   headerShown: false,
      //   headerStyle: {
      //     backgroundColor: '#106bce'
      //   }
      // }}
    />
    <Stack.Screen name="LandingTwo" component={LandingTwo} />
  </Stack.Navigator>
);

export default AppStack;
