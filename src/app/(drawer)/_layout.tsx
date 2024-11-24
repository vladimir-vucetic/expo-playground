import { Stack, Tabs } from "expo-router";

export default function DrawerStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}
