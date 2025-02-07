import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Login/styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
      }}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Ionicons name="person-add" size={30} color="#FFFFFF" />
            </View>
            <Text style={styles.title}>SafeAngola</Text>
            <Text style={styles.subtitle}>
              Detecção e alertas de acidentes rodoviários
            </Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                size={24}
                color="#A0AEC0"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#A0AEC0"
                value={name}
                onChangeText={setName}
              />
            </View>

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
              <Text style={styles.authButtonText}>Cadastrar</Text>
            </TouchableOpacity>

            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text style={styles.switchAuthText}>
                  Já tem conta?{" "}
                  <Text style={styles.switchAuthTextBold}>Entrar</Text>
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
