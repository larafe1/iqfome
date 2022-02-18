import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn, SignUp } from '@/screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
