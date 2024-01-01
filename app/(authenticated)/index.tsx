import { Redirect } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { useSnapshot } from 'valtio';
import { state } from '../../ts/store';

export default function Home() {
  const { authStatus } = useSnapshot(state);

  if (authStatus === 'authenticated') {
    return <View>Home Page</View>;
  }

  return <Redirect href="/registration" />;
}
