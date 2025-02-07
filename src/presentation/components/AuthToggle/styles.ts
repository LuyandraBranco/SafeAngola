import { StyleSheet } from "react-native";

export default StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden"
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    elevation: 2,
  },
  activeButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  inactiveButtonText: {
    color: "#A0AEC0",
  },
});
