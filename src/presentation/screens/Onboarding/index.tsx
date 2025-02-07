import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { CaretLeft } from "phosphor-react-native";
import onboardingData from "./data";
import { useRouter } from "expo-router";

export function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const router = useRouter();

  const handleNext = async () => {
    if (currentScreen < onboardingData.length - 1) {
      setCurrentScreen((prevScreen) => prevScreen + 1);
    } else {
      router.replace("/login");
    }
  };

  const handleBack = () => {
    if (currentScreen > 0) {
      setCurrentScreen((prevScreen) => prevScreen - 1);
    }
  };

  return (
    <SafeAreaView style={styles.containerOnboarding}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <CaretLeft size={28} color="#121212" style={styles.txt} />
        </TouchableOpacity>
        <Text
          style={styles.headerTxt}
          onPress={() => {
            router.replace("/login");
          }}
        >
          Skip
        </Text>
      </View>
      <View style={[styles.itemsContainer]}>
        <View style={styles.imageContainer}>
          <Image
            source={onboardingData[currentScreen].image}
            style={styles.imagem}
            resizeMode="contain"
          />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>
            {onboardingData[currentScreen].title}
          </Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.description}>
            {onboardingData[currentScreen].description}
          </Text>
        </View>
        <TouchableOpacity style={[styles.button]} onPress={handleNext}>
          <Text style={styles.txtButton}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
