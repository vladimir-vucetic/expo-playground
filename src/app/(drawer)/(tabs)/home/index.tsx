import { Link } from "expo-router";
import { Text } from "react-native";

export default function Home() {
  return (
    <>
      <Text>Home index</Text>
      <Link href={"/(drawer)/settings"}>
        <Text>Go to settings outside of tabs</Text>
        <Text>This same doesn't work on drawer</Text>
      </Link>
    </>
  );
}
