import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";

export default function CustomDrawer(props: any) {
  const router = useRouter();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"LIST"}
        onPress={() => {
          router.navigate("home/details");
        }}
      />
    </DrawerContentScrollView>
  );
}
