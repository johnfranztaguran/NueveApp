// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['module:@react-native/babel-preset'],
//     plugins: ['nativewind/babel'],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }]],
    plugins: ["react-native-reanimated/plugin"],
  };
};
