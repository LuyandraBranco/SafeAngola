import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F4F8",
      },
      scrollView: {
        flexGrow: 1,
      },
      header: {
        backgroundColor: "#9D0208",
        paddingTop: 60,
        paddingBottom: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: "center",
      },
      iconContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
      },
      title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "center",
        paddingHorizontal: 20,
      },
      featuresContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 30,
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 20
      },
      featureItem: {
        alignItems: "center",
      },
      featureText: {
        marginTop: 8,
        fontSize: 12,
        textAlign: "center",
        color: "#4A5568",
        maxWidth: 80,
      },
      formContainer: {
        margin: 20,
        padding: 20,
        borderRadius: 20,
        overflow: "hidden",
      },
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 8,
      },
      input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: "#2D3748",
      },
      loginButton: {
        backgroundColor: "#E5383B",
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 20,
      },
      loginButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
      },
      signupText: {
        marginTop: 20,
        textAlign: "center",
        color: "#718096",
        fontSize: 16,
      },
      signupTextBold: {
        fontWeight: "bold",
        color: "#E5383B",
      },
  })