import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  View,
} from 'react-native';

import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={{ backgroundColor: '#000' }}>
        <Home />
      </View>
    </>
  );
}
