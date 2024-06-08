import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';

export default function App() {
  const [ready, setReady] = useState(false);

  const loadBackgroundAssets = async () => {
    console.log('Loading heavy assets in the background');
    // Add asset loading logic here if needed
  };

  const readyApp = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await loadBackgroundAssets();
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate asset loading delay
    } catch (e) {
      console.warn(e);
    } finally {
      setReady(true);
    }
  };

  useEffect(() => {
    readyApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
