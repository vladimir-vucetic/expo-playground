import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";

export function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"home"}
        onPress={() => {
          router.navigate("(tabs)/home");
        }}
      />
      <DrawerItem
        label={"settings"}
        onPress={() => {
          router.push("/(drawer)/settings");
        }}
      />
    </DrawerContentScrollView>
  );
}
export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawer} />
    </GestureHandlerRootView>
  );
}
