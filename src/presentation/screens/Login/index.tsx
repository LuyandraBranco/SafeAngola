"use client";

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import {
  Bell,
  Car,
  Envelope,
  Lock,
  ShieldCheck,
  WarningOctagon,
} from "phosphor-react-native";
import { BlurView } from "expo-blur";
import styles from "./styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <WarningOctagon color="#FFFFFF" size={40} weight="fill" />
            </View>
            <Text style={styles.title}>SafeAngola</Text>
            <Text style={styles.subtitle}>
              Detecção e alertas de acidentes rodoviários
            </Text>
          </View>

          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <Car color="#E5383B" size={32} weight="duotone" />
              <Text style={styles.featureText}>
                Monitoramento em tempo real
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Bell color="#E5383B" size={32} weight="duotone" />
              <Text style={styles.featureText}>Alertas instantâneos</Text>
            </View>
            <View style={styles.featureItem}>
              <ShieldCheck color="#E5383B" size={32} weight="duotone" />
              <Text style={styles.featureText}>Segurança aprimorada</Text>
            </View>
          </View>

          <BlurView intensity={0} tint="light" style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Envelope color="#E5383B" size={24} weight="duotone" />
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
              <Lock color="#E5383B" size={24} weight="duotone" />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#A0AEC0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.signupText}>
                Novo por aqui?{" "}
                <Text style={styles.signupTextBold}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
          </BlurView>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
