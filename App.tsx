import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
} from 'react-native';

import Home from './src/screens/Home';
import Drawer from './src/components/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
      <StatusBar style="light" backgroundColor="#000" />
    </NavigationContainer>

  );
}
