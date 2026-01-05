import React from 'react';
import {createBottomTabNavigator, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import DashBoard from '../screens/DashBoard/DashBoard';
import CustomBottomNavIcons from './components/CustomBottomNavIcons';
import Cart from './CartStack';
import Explore from './ExploreStack';
import Notifications from './NotificationsStack';
import User from './UserStack';

const Tab = createBottomTabNavigator();

const renderTabBar = (props: BottomTabBarProps) => (
  <CustomBottomNavIcons {...props} />
);

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f0f0e0',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerShown: false,
      }}
      tabBar={renderTabBar}
      backBehavior="initialRoute">
      <Tab.Screen name="Home" component={DashBoard} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
