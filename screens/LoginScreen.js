import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";

const LoginScreen = ({ navigation }) => {
  const { darkBg, lightBg, text, theme, buttons, sizes } = useSelector(
    (state) => state.color
  );
  // Bg: {
  //   primary: "#0D0D0D",
  //   secondary: "#141414",
  // },
  // buttonColors: {
  //   primary: "#00596F",
  //   secondary: "#FFFFFF",
  // },
  // lightColors: {
  //   primary: "#FFFFFF",
  //   secondary: "#EEEEEE",
  // },
  // color: {
  //   primary: "#00CDBD",
  //   secondary: "#FFFFFF",
  // },
  // Fontsize: {
  //   large: 46,
  //   medium: 36,

  //   small: 18,
  //   extraSmall: 12,
  // },
  return (
    <>
      <StatusBar backgroundColor="black" />
      <View
        style={[
          styles.container,
          { backgroundColor: theme ? lightBg.primary : darkBg.primary },
        ]}
        onTouchStart={() => Keyboard.dismiss()}
      >
        <View>
          <Header size={36} color={theme ? text.dark : text.light}>
            Login
          </Header>
        </View>
        <View style={styles.inputContainer}>
          <Text
            style={[styles.label, { color: theme ? text.dark : text.light }]}
          >
            Email
          </Text>
          <TextInput
            style={[styles.input, { borderColor: "#00596F" }]}
            placeholder="email"
            placeholderTextColor="#9D9D9D"
            autoFocus={true}
          />
          <Text
            style={[styles.label, { color: theme ? text.dark : text.light }]}
          >
            Password
          </Text>
          <TextInput
            style={[styles.input, { borderColor: "#00596F" }]}
            placeholder="password"
            secureTextEntry={true}
            placeholderTextColor="#9D9D9D"
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.forgetpassword}>
            <TouchableOpacity
              onPress={() => navigation.replace("ForgotPassword")}
            >
              <Paragraph
                color={theme ? text.secondary : text.primary}
                size={sizes.xsmall}
              >
                Fotgot Password?
              </Paragraph>
            </TouchableOpacity>
          </View>

          {/* Sign in Button */}
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: theme ? buttons.dark : buttons.light,
              },
            ]}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Paragraph color={text.light} size={sizes.small}>
              Sign-in
            </Paragraph>
          </TouchableOpacity>
          <View style={[styles.registerContainer]}>
            <Paragraph
              color={theme ? text.dark : text.light}
              size={sizes.xsmall}
            >
              Don't have an account?
            </Paragraph>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Paragraph
                color={theme ? text.secondary : text.primary}
                size={sizes.xsmall}
              >
                Register
              </Paragraph>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "400",
    paddingBottom: 20,
  },
  label: {
    paddingLeft: 12,
  },
  input: {
    marginBottom: 20,
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 14,
    color: "white",
  },
  inputContainer: {
    width: "90%",
  },
  buttonText: { textAlign: "center" },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  bottomContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  forgetpassword: {
    flexDirection: "row",
  },
  registerContainer: {
    position: "absolute",
    bottom: -100,

    flexDirection: "row",
  },
  error: {
    color: "red",
    Fontsize: 18,
  },
});
