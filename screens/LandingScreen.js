import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";

import { useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";

const LandingScreen = ({ navigation }) => {
  const { darkBg, lightBg, text, theme, buttons } = useSelector(
    (state) => state.color
  );
  return (
    <>
      <View
        style={[
          styles.container,
          { backgroundColor: theme ? lightBg.primary : darkBg.primary },
        ]}
      >
        <View style={styles.headerContainer}>
          <Header size={46} color={theme ? text.dark : text.light}>
            Basic Programming E-learning Application
          </Header>
          {/* <Paragraph
            color={theme ? text.dark : text.light}
            fw={theme ? 400 : 100}
            size={18}
          >
            The best app to learn Programming
          </Paragraph> */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: theme ? buttons.dark : buttons.light,
              },
            ]}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Paragraph color={text.light} size={18}>
              Continue
            </Paragraph>
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
    paddingVertical: 8,
    borderRadius: 8,
  },
});
