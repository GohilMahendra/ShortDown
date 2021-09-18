/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useReducer, useRef, useState } from 'react';

import {
  Dimensions,
  Pressable,
  SafeAreaView,

  Text,
  View,
} from 'react-native';

import Video, { FilterType } from "react-native-video";
import RootStackNavigator from './src/navigation/RootStackNavigator';
import VideoScreen from './src/screens/VideoScreen';
const App = () => {

  return (

    <RootStackNavigator></RootStackNavigator>
  );
};

export default App;
