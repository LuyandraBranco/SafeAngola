import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    backgroundImage: {
        width: width,
        height: height,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    content: {
        padding: 20,
        marginBottom: 50
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#121212',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#121212',
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20
    },
    button: {
        backgroundColor: '#E5383B',
        padding: 15,
        borderRadius: 30,
        flex: 1,
    },
    buttonLogin: {
        backgroundColor: '#780000',
        padding: 15,
        borderRadius: 30,
        flex: 1,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});