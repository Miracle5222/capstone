import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";

const LandingScreen = ({ navigation }) => {
  const { theme } = useTheme();
  return (
    <>
      <StatusBar style="light" />
      <View style={[styles.container, { backgroundColor: theme.Bg.primary }]}>
        <View style={styles.headerContainer}>
          <Text style={[styles.textHeader, { fontSize: theme.Fontsize.large }]}>
            Basic Programming E-learning Application
          </Text>
          <Text
            style={[styles.textParagraph, { fontSize: theme.Fontsize.small }]}
          >
            The best app to learn Programming
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: theme.buttonColors.primary,
              },
            ]}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text
              style={{
                color: theme.buttonColors.secondary,
                fontSize: theme.Fontsize.small,
              }}
            >
              SIGN-IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  headerContainer: {
    marginTop: 150,
    textAlign: "left",
  },
  textHeader: {
    color: "white",
  },
  textParagraph: {
    color: "#ffffff",
    fontWeight: "100",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
});
