import { Stack } from 'expo-router';
import React from 'react';

export default function PanelLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="configuracion" options={{ title: 'Mi configuración' }} />
    </Stack>
  );
}
