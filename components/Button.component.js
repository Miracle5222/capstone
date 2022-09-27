import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Button = ({ event, children }) => {
  const { darkBg, lightBg, text, theme, buttons } = useSelector(
    (state) => state.color
  );

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: buttons.light,
        },
      ]}
      onPress={event}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
});
