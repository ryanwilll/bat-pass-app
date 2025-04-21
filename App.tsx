import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Home } from './src/screens/Home';
import React from 'react';
import Toast from 'toastify-react-native';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
        <Toast />
      </SafeAreaView>
    </>
  );
}
