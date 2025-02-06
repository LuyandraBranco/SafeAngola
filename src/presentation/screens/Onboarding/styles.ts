import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerOnboarding: {
        backgroundColor: "#fff",
        flexDirection: "column",
        paddingHorizontal: 24,
        paddingTop: 40,
        flex: 1,
    },
    header: {
        width: "100%",
        height: "5.5%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    txt: {
        marginLeft: -8,
    },
    headerTxt: {
        color: "#121212",
        fontSize: 16,
    },
    itemsContainer: {
        width: "100%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    containerTitle: {
        width: 303,
        height: 95,
    },
    title: {
        fontSize: 32,
        color: "#121212",
        textAlign: "center",
        marginBottom: 2,
        fontWeight: "700"
    },
    containerDescription: {
        width: 303,
        height: 80,
        marginBottom: 20,
    },
    description: {
        color: "#B3B0B8",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 5,
    },
    imageContainer: {
        width: "100%",
        height: "62%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    imagem: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    button: {
        width: "95%",
        height: 52,
        backgroundColor: "#E5383B",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
    },
    txtButton: {
        color: "#fff",
        fontSize: 16,
    },
});