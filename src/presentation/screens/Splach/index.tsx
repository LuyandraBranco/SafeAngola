import { View, Image, SafeAreaView } from "react-native";
import styles from "./styles";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export function Splach() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/onboarding');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <SafeAreaView style={[styles.containeSplach]}>
            <View style={[styles.imageContainer]}>
                <Image
                    source={require("../../../../assets/images/logo.png")}
                    style={styles.imagem}
                    resizeMode="contain"
                />
            </View>
        </SafeAreaView>
    );
}