import React from 'react';

import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold
} from '@expo-google-fonts/rubik';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import theme from '@/global/styles/theme';
import { AuthProvider, RestaurantsProvider } from '@/hooks';
import { Routes } from '@/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RestaurantsProvider>
          <Routes />
        </RestaurantsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
