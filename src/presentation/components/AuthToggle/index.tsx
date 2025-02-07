import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";

interface IAuthToggleProps {
  active: "login" | "signup";
}

export function AuthToggle({ active }: IAuthToggleProps) {
  const router = useRouter();

  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[styles.toggleButton, active === "login" && styles.activeButton]}
        onPress={() => router.push("/login")}
      >
        <Text
          style={
            active === "login"
              ? styles.activeButtonText
              : styles.inactiveButtonText
          }
        >
          Log in
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.toggleButton,
          active === "signup" && styles.activeButton,
        ]}
        onPress={() => router.push("/signup")}
      >
        <Text
          style={
            active === "signup"
              ? styles.activeButtonText
              : styles.inactiveButtonText
          }
        >
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
