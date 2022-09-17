import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";

const RegisterScreen = ({ navigation }) => {
  const { darkBg, lightBg, text, theme, buttons, sizes } = useSelector(
    (state) => state.color
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Login",
      headerStyle: {
        backgroundColor: theme ? lightBg.primary : darkBg.primary,
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
      headerTintColor: theme ? text.dark : text.light,
    });
  }, [navigation]);

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
          <Text
            style={[
              styles.text,
              {
                fontSize: 36,
                color: theme ? text.dark : text.light,
              },
            ]}
          >
            Register
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text
            style={[styles.label, { color: theme ? text.dark : text.light }]}
          >
            Username
          </Text>
          <TextInput
            style={[
              styles.input,
              { borderColor: "#00596F", color: theme ? text.dark : text.light },
            ]}
            placeholder="username"
            placeholderTextColor="#9D9D9D"
            autoFocus={true}
          />
          <Text
            style={[styles.label, { color: theme ? text.dark : text.light }]}
          >
            Email
          </Text>
          <TextInput
            style={[
              styles.input,
              { borderColor: "#00596F", color: theme ? text.dark : text.light },
            ]}
            placeholder="email"
            placeholderTextColor="#9D9D9D"
          />
          <Text
            style={[styles.label, { color: theme ? text.dark : text.light }]}
          >
            Password
          </Text>
          <TextInput
            style={[
              styles.input,
              { borderColor: "#00596F", color: theme ? text.dark : text.light },
            ]}
            placeholder="password"
            secureTextEntry={true}
            placeholderTextColor="#9D9D9D"
          />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: theme ? buttons.dark : buttons.light,
              },
            ]}
            onPress={() => navigation.replace("LoginScreen")}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 18,
                  color: text.light,
                },
              ]}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    paddingLeft: 12,
    color: "white",
  },
  text: {
    fontWeight: "400",
    paddingBottom: 20,
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
    bottom: -200,
    flexDirection: "row",
  },
});
