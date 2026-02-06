import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import useSampleStore from '../../store/useSampleStore';
// import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import { quickActions, categories, featured } from '../../contants/mocks';
import SearchIcon from '../../../assets/search.svg';
// import Favorite from '../../../assets/svgs/favorite.svg'
import IconSvg, {IconName} from '../../components/IconSvg';

const quickActionIcons: Record<string, IconName> = {
  favorite: 'favorite',
  history: 'history',
  following: 'following',
  order: 'order',
};

function DashBoard() {
  return (
    // <SafeAreaView className="flex-1 bg-gray-100">
    //   <AppContent />
    // </SafeAreaView>
    <AppContent />
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();
  const {count, increment, decrement, reset} = useSampleStore();
  // const tabBarHeight = useBottomTabBarHeight();
  console.log('insets', insets)
  return (
    <View>
      <SafeAreaView className="px-4 pt-2 space-y-5" edges={['top']}>
        <View className="bg-surface rounded-lg px-3 py-2.5 flex-row items-center shadow-sm mb-3">
          <SearchIcon width={20} height={20} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#9CA3AF"
            className="flex-1 text-base text-gray-900 ml-3"
          />
        </View>
      </SafeAreaView>
      <ScrollView
        // className="flex-1"
        // removeClippedSubviews
        contentContainerStyle={{paddingBottom: insets.bottom}}
      >
        <View className="px-4 pt-2 space-y-5">
          {/* Search */}
          {/* <View className="bg-surface rounded-lg px-3 py-2.5 flex-row items-center shadow-sm mb-3">
            <SearchIcon width={20} height={20} />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#9CA3AF"
              className="flex-1 text-base text-gray-900 ml-3"
            />
          </View> */}

          {/* Quick actions */}
          <ScrollView horizontal>
            <View className="flex-row justify-between mb-3">
              {quickActions.map(action => (
                <TouchableOpacity
                  key={action.label}
                  className="bg-white rounded-md px-3 py-2 flex-row items-center border-muted border-half-px mr-2">
                  <IconSvg
                    name={quickActionIcons[action.icon] ?? 'favorite'}
                    // className="mr-5"
                  />
                  <Text className="text-sm ml-2 text-gray-800">{action.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/* Banner */}
          <View className="bg-white rounded-3xl overflow-hidden shadow-sm mb-3">
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
              }}
              className="w-full h-60"
              resizeMode="cover"
            />
            <View className="absolute inset-0 justify-center px-5">
              <Text className="text-2xl font-semibold text-gray-900">
                Advertise
              </Text>
            </View>
          </View>

          {/* Categories */}
          <View className="space-y-3">
            <View className="flex-row items-center justify-between px-1">
              <Text className="text-lg font-semibold text-gray-900">
                You&apos;re looking for...
              </Text>
              <Text className="text-xl">▾</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-4 px-1">
                {categories.map(item => (
                  <View key={item.label} className="items-center w-20 space-y-2">
                    <View className="w-20 h-20 rounded-full overflow-hidden bg-white shadow-sm">
                      <Image
                        source={{uri: item.image}}
                        className="w-full h-full"
                        resizeMode="cover"
                      />
                    </View>
                    <Text className="text-xs text-gray-800 text-center">
                      {item.label}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Featured */}
          <View className="space-y-3">
            <View className="flex-row items-center justify-between px-1">
              <Text className="text-lg font-semibold text-gray-900">
                Most Featured Products
              </Text>
              <Text className="text-xl">▸</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-3 px-1">
                {featured.map((item, index) => (
                  <View
                    key={`${item.title}-${index}`}
                    className="w-40 bg-white rounded-2xl shadow-sm overflow-hidden">
                    <Image
                      source={{uri: item.image}}
                      className="w-full h-36"
                      resizeMode="cover"
                    />
                    <View className="px-3 py-2 space-y-1">
                      <Text className="text-xs text-gray-500">{item.brand}</Text>
                      <Text className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </Text>
                      <Text className="text-sm text-gray-900">{item.price}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
          {/* Sample Zustand controls */}
          <View className="bg-white rounded-2xl p-4 shadow-sm">
            <Text className="text-base font-semibold text-gray-900">
              Zustand Sample
            </Text>
            <Text className="text-sm text-gray-600 mt-1">Count: {count}</Text>
            <View className="flex-row mt-3 space-x-2">
              <TouchableOpacity
                onPress={decrement}
                className="px-3 py-2 rounded-xl bg-gray-200">
                <Text className="text-gray-900">-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={reset}
                className="px-3 py-2 rounded-xl bg-gray-200">
                <Text className="text-gray-900">Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={increment}
                className="px-3 py-2 rounded-xl bg-gray-900">
                <Text className="text-white">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default DashBoard;
