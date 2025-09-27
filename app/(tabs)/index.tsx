import { Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import CreatePosterScreen from '../CreatePosterScreen';

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
