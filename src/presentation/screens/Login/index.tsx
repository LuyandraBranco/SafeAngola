import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { AuthToggle } from "../../components/AuthToggle";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab] = useState<"login" | "signup">("login");

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <KeyboardAvoidingView style={styles.container}>
        <View
          style={{
            position: "absolute",
            top: -50,
            left: -50,
            width: 150,
            height: 150,
            backgroundColor: "#E5383B",
            borderRadius: 75,
            opacity: 0.4,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: -50,
            right: -50,
            width: 150,
            height: 150,
            backgroundColor: "#E5383B",
            borderRadius: 75,
            opacity: 0.4,
          }}
        />

        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="lock-closed" size={30} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>SafeAngola</Text>
          <Text style={styles.subtitle}>
            Detecção e alertas de acidentes rodoviários
          </Text>
        </View>

        <AuthToggle active={activeTab} />

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={24}
              color="#A0AEC0"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#A0AEC0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons
              name="key-outline"
              size={24}
              color="#A0AEC0"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#A0AEC0"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.authButton} onPress={() => {}}>
            <Text style={styles.authButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <Link href="/login" asChild>
          <TouchableOpacity>
            <Text style={styles.switchAuthTextBold}>
              Esqueceu a palavra-passe?
            </Text>
          </TouchableOpacity>
        </Link>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
