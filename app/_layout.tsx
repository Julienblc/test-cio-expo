import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { CioConfig, CioLogLevel, CustomerIO } from "customerio-reactnative";

// You'll need to install and import the Customer.io SDK
// import { CustomerIO, CioConfig, CioLogLevel } from 'customerio-react-native';

import { useColorScheme } from '@/hooks/useColorScheme';

function AppContainer() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const AppWrapper = () => {
  useEffect(() => {
    if (__DEV__) return
    const initializeCustomerIO = () => {
      const config: CioConfig = {
        cdpApiKey: process.env.EXPO_PUBLIC_CUSTOMER_IO_CDP_API_KEY || '',
        migrationSiteId: process.env.EXPO_PUBLIC_CUSTOMER_IO_SITE_ID || '',
        logLevel: CioLogLevel.Error,
      };
      CustomerIO.initialize(config);
    };
    initializeCustomerIO();
  }, []);

  return <AppContainer />
}

export default AppWrapper;
