import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from '../screens/Notifications/Notifications';

const Stack = createStackNavigator();

const NotificationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="NotificationsScreen"
      component={Notifications}
      options={{ header: () => null }}
    />
  </Stack.Navigator>
);

export default NotificationStack;
