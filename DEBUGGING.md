# React Native Debugger Setup Guide

This guide will help you set up and use React Native Debugger for debugging your React Native application.

## Installation

### macOS (using Homebrew)
```bash
brew install --cask react-native-debugger
```

### Manual Installation
Download from [React Native Debugger Releases](https://github.com/jhen0409/react-native-debugger/releases)

## Quick Start

1. **Start React Native Debugger**
   - Open the React Native Debugger app
   - Or use the npm script: `npm run debugger`

2. **Start Metro Bundler**
   ```bash
   npm start
   ```

3. **Run your app**
   ```bash
   # For iOS
   npm run ios
   # or
   npm run debug:ios  # Opens debugger automatically
   
   # For Android
   npm run android
   # or
   npm run debug:android  # Opens debugger automatically
   ```

4. **Enable Remote Debugging**
   - Open the developer menu:
     - **iOS Simulator**: `Cmd + D` or `Ctrl + Cmd + Z`
     - **Android Emulator**: `Cmd + M` (macOS) or `Ctrl + M` (Windows/Linux)
     - **Physical Device**: Shake the device
   - Select **"Debug JS Remotely"**

5. **Verify Connection**
   - React Native Debugger should show "Connected" status
   - You can now use Chrome DevTools, React DevTools, and Redux DevTools

## Features

React Native Debugger includes:
- **Chrome DevTools**: Console, Network, Sources, etc.
- **React DevTools**: Component tree, props, state inspection
- **Redux DevTools**: Action history, state time-travel (if using Redux)

## Troubleshooting

### Port Conflicts
If Metro is running on a different port, update the debugger URL:
```bash
open "rndebugger://set-debugger-loc?host=localhost&port=YOUR_PORT"
```

### Connection Issues
1. Ensure Metro bundler is running
2. Check that "Debug JS Remotely" is enabled in the dev menu
3. Verify React Native Debugger is listening on the correct port
4. Try restarting both Metro and React Native Debugger

### React DevTools Not Showing
- Make sure you're using React Native Debugger (not Chrome DevTools)
- React DevTools is built into React Native Debugger

## Alternative: Flipper

For more advanced debugging, consider using [Flipper](https://fbflipper.com/), Facebook's debugging platform for React Native.

