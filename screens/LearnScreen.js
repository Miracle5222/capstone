import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@rneui/themed";

const LearnScreen = () => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        { backgroundColor: theme.Bg.primary },
      ]}
    >
      <Text
        style={[
          { fontSize: theme.Fontsize.medium, color: theme.colors.secondary },
        ]}
      >
        Caren Mondejar
      </Text>
    </View>
  );
};

export default LearnScreen;

const styles = StyleSheet.create({});
