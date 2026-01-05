import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from '../screens/UserProfile/UserProfile';

const Stack = createStackNavigator();

const UserStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="UserProfile"
      component={UserProfile}
      options={{ header: () => null }}
    />
  </Stack.Navigator>
);

export default UserStack;
