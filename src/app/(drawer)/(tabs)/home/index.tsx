import { Link } from "expo-router";
import { Text } from "react-native";

export default function Home() {
  return (
    <Link href={"/settings"}>
      <Text>HOME go to settings</Text>
    </Link>
  );
}
