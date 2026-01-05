import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/Explore/Explore';

const Stack = createStackNavigator();

const ExploreStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Location"
      component={Explore}
      options={{ header: () => null }}
    />
  </Stack.Navigator>
);

export default ExploreStack;
