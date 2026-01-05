import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useSampleStore from '../../store/useSampleStore';

const quickActions = [
  {label: 'Favorites', emoji: '❤️'},
  {label: 'History', emoji: '🕘'},
  {label: 'Following', emoji: '👥'},
  {label: 'Collections', emoji: '🗂️'},
];

const categories = [
  {
    label: "Coffe's",
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=200&q=80',
  },
  {
    label: 'Tours',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=200&q=80',
  },
  {
    label: 'Rentals',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&q=80',
  },
  {
    label: 'Title',
    image:
      'https://images.unsplash.com/photo-1464979672361-746a04b4bca6?auto=format&fit=crop&w=200&q=80',
  },
];

const featured = [
  {
    title: 'Product name',
    price: '$10.99',
    brand: 'Brand',
    image:
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Product name',
    price: '$10.99',
    brand: 'Brand',
    image:
      'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Product name',
    price: '$10.99',
    brand: 'Brand',
    image:
      'https://images.unsplash.com/photo-1511684681081-05dfe1ae2f17?auto=format&fit=crop&w=400&q=80',
  },
];

function Landing() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaView>
  );
}

function AppContent() {
  const {count, increment, decrement, reset} = useSampleStore();

  return (
    <ScrollView className="flex-1">
      <View className="px-4 pt-2 pb-6 space-y-5">
        {/* Search */}
        <View className="bg-white rounded-2xl px-3 py-2.5 flex-row items-center shadow-sm">
          <Text className="text-lg mr-3 text-gray-400">🔍</Text>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#9CA3AF"
            className="flex-1 text-base text-gray-900"
          />
        </View>

        {/* Quick actions */}
        <View className="flex-row justify-between">
          {quickActions.map(action => (
            <TouchableOpacity
              key={action.label}
              className="bg-white rounded-2xl px-3 py-2 flex-row items-center shadow-sm">
              <Text className="text-lg mr-2">{action.emoji}</Text>
              <Text className="text-sm text-gray-800">{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Banner */}
        <View className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
            }}
            className="w-full h-40"
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
  );
}

export default Landing;
