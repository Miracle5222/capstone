import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@rneui/themed";

const ProfileScreen = () => {
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
        Roneil G. Bansas
      </Text>
    </View>
  );
};

export default ProfileScreen;