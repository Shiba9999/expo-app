import React from 'react';
import { Stack } from 'expo-router';
import { withExpoSnack } from 'nativewind';



function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* Add other screens here */}
    </Stack>
  );
}

export default withExpoSnack(RootLayout);