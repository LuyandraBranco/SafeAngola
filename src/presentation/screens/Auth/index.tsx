import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";

export function Auth() {
     const router = useRouter();
  return (
    <ImageBackground
      source={require("../../../../assets/images/auth.jpeg")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>SafeAngola</Text>
          <Text style={styles.description}>
            Segurança e resposta rápida nas estradas!
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonLogin} onPress={()=>{
                router.push('/login');
            }}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
