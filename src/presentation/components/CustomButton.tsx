import type React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

interface CustomButtonProps {
  title: string
  onPress: () => void
  backgroundColor?: string
  textColor?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#FF6B6B",
  textColor = "#FFFFFF",
}) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default CustomButton

