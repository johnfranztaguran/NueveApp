import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Landing from '../screens/Dashboard/Landing';
import LandingTwo from '../screens/Dashboard/LandingTwo';
import TestIcon from '../../assets/test.svg';

const Tab = createBottomTabNavigator();

const renderTabIcon = ({color, size}: {color: string; size: number}) => (
  <TestIcon width={size} height={size} color={color} />
);

const BottomNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {backgroundColor: '#f3f4f6'},
      tabBarIcon: renderTabIcon,
      tabBarActiveTintColor: '#111827',
      tabBarInactiveTintColor: '#9CA3AF',
      headerShown: false,
    }}
    backBehavior="initialRoute">
    <Tab.Screen name="Landing" component={Landing} />
    <Tab.Screen name="LandingTwo" component={LandingTwo} />
    <Tab.Screen name="LandingThree" component={Landing} />
    <Tab.Screen name="LandingFour" component={LandingTwo} />
  </Tab.Navigator>
);

export default BottomNavigation;
