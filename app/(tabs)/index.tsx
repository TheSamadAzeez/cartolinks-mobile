import { Stack } from 'expo-router';

import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';
import CreatePosterScreen from '../CreatePosterScreen';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <>
      <Stack.Screen />
      <StatusBar style="light" />
      <CreatePosterScreen />
      {/* <View style={styles.container}>
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
