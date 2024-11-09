import { Image, StyleSheet, Platform, Text, TextInput } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <>
      <ThemedText>Sajak shrestha</ThemedText>
      <ThemedText>I ma Sajak shrestha</ThemedText>
      <Text>Enter Your Name</Text>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: "black",
          width: "auto",
        }}
        placeholder="Enter your Name please"
      />
    </>
  );
}
