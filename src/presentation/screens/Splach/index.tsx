import { View, Image, SafeAreaView } from "react-native";
import styles from "./styles";

export function Splach() {
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