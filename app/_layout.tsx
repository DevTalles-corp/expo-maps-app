import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/presentation/hooks/useColorScheme';
import PermissionsCheckerProvider from '@/presentation/providers/PermissionsCheckerProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PermissionsCheckerProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="loading/index"
              options={{ animation: 'none' }}
            />
            <Stack.Screen name="map/index" options={{ animation: 'fade' }} />
            <Stack.Screen
              name="permissions/index"
              options={{ animation: 'fade' }}
            />
          </Stack>
        </PermissionsCheckerProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
