import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Landing from '../screens/Dashboard/Landing';
import LandingTwo from '../screens/Dashboard/LandingTwo';
import IconSvg from '../components/IconSvg';
import TestIcon from '../../assets/test.svg';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => (
  <Tab.Navigator
    // screenOptions={{
    //   tabBarIcon: ({color, size}) => (
    //     <TestIcon width={size} height={size} color={color} />
    //   ),
    //   tabBarActiveTintColor: '#111827',
    //   tabBarInactiveTintColor: '#9CA3AF',
    //   headerShown: false,
    // }}
    backBehavior="initialRoute">
    <Tab.Screen
      name="Landing"
      component={Landing}
      options={{
        // tabBarIcon: ({color, size}) => (
        //   <TestIcon width={size} height={size} color={color} />
        // ),
        // tabBarIcon: ({ color, size }) => { return (<IconSvg name="home" width={24} height={24} fill="#111827" />); },
        tabBarIcon: ({ color, size }) => { return (<TestIcon width={24} height={24} fill="#111827" />); },
      }}
    />
    <Tab.Screen name="LandingTwo" component={LandingTwo} />
    <Tab.Screen name="LandingThree" component={Landing} />
    <Tab.Screen name="LandingFour" component={LandingTwo} />
  </Tab.Navigator>
);

export default BottomNavigation;
