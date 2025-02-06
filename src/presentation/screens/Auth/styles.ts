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
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#E5383B',
        padding: 15,
        borderRadius: 30,
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});