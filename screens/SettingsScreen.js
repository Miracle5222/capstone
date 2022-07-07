import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@rneui/themed";

const SettingsScreen = () => {
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
        Mary Grace Buagas
      </Text>
    </View>
  );
};

export default SettingsScreen;
