import { Link } from "expo-router";
import { Text } from "react-native";

export default function Home() {
  return (
    <>
      <Link href={"/list"}>
        <Text>go to list</Text>
      </Link>
      <Link href={"/home/details"}>
        <Text>go to details</Text>
      </Link>
      <Text>home</Text>
    </>
  );
}
