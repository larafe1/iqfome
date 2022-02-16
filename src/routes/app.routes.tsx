import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '@/screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
}
