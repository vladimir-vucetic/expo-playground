import { Stack } from "expo-router";

export default function () {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="settings/index" />
    </Stack>
  );
}
