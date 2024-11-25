import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home/index" />
      <Tabs.Screen name="notifications/index" />
    </Tabs>
  );
}
