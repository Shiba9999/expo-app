const { getDefaultConfig } = require('expo/metro-config');

// Expo SDK 53 default Metro configuration – no extra transformers needed for NativeWind v2
module.exports = getDefaultConfig(__dirname);