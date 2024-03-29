import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";

import { useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { Highlighter } from "../components/CodeHighlighter.component";

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
        </View>
        {/* <Highlighter language="java">{`class BoolTest {
public static void main(String args[]) {
boolean b; b = false;
System.out.println("b is " + b);
b = true;
System.out.println("b is " + b);
// a boolean value can control the if statement
if(b) System.out.println("This is executed.");
b = false; if(b) System.out.println("This is not executed.");
// outcome of a relational operator is a boolean value System.out.println("10 > 9 is " + (10 > 9)); } }`}</Highlighter> */}
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
    paddingVertical: 12,
    borderRadius: 8,
  },
});
