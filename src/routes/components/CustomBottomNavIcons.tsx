import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconSvg from '../../components/IconSvg';
import type {
  BottomTabBarProps,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs';
import type {NavigationHelpers, ParamListBase} from '@react-navigation/native';

type CustomBottomNavIconsProps = {
  state: BottomTabBarProps['state'];
  descriptors: BottomTabBarProps['descriptors'];
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
} & Omit<BottomTabBarProps, 'state' | 'descriptors' | 'navigation'>;

const icons = ['home', 'explore', 'cart', 'notification-bell', 'user'] as const;
const titles = ['Home', 'Explore', 'Cart', 'Notifications', 'User'] as const;

const CustomBottomNavIcons: React.FC<CustomBottomNavIconsProps> = (props) => {
  const {state, navigation} = props;
  const {routes, index} = state;

  const handlePressTab = (
    route: {key: string; name: string},
    isFocused: boolean,
  ) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  }

  return (
    <SafeAreaView edges={['bottom']} className="bg-surface pt-0 mt-0">
      <View className="h-[75px] flex-row bg-surface border-t border-black/20">
        {routes.map((route, idx) => {
          const isFocused = index === idx;
          const color = isFocused ? '#111827' : '#9CA3AF';
          const iconName = icons[idx] ?? 'home';
          const title = titles[idx] ?? route.name;

          return (
            <TouchableWithoutFeedback onPress={() => handlePressTab(route, isFocused)} key={route.key}>
              <View className="flex-1 items-center justify-center bg-surface">
                <IconSvg
                  width={22}
                  height={22}
                  fill={color}
                  stroke='none'
                  name={iconName}
                  // className="mt-5"
                />
                <Text className="text-[10px] leading-3 text-center" style={{color}}>
                  {title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default CustomBottomNavIcons;
