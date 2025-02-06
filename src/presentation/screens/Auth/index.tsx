import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import styles from './styles';

export function Auth() {
    return (
        <ImageBackground
            source={require('../../../../assets/images/auth.jpeg')}
            style={styles.backgroundImage}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>SafeAngola</Text>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae ipsa, cumque illum
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
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

