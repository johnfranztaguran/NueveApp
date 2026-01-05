/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './index.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f3f4f6', // gray-100
        surface: '#ffffff',
        primary: '#111827', // gray-900
        muted: '#9ca3af', // gray-400
      },
      borderRadius: {
        '2xl': 16,
        '3xl': 24,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  presets: [require('nativewind/preset')],
};
