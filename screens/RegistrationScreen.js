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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import {
  usernameHandler,
  passwordHandler,
  emailHandler,
} from "../redux/feature/registerReducer";
const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { darkBg, lightBg, text, theme, buttons, sizes } = useSelector(
    (state) => state.color
  );
  const { username, email, password } = useSelector((state) => state.register);

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

  studentRegister = () => {
    fetch(
      "https://6fc3-2001-4455-15b-400-a4f6-d213-81ae-3f67.ap.ngrok.io/capstone/controls/register.php",
      {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        }),
      }
    )
      .then((response) => response.text())
      .then((responseJson) => {
        alert(responseJson);
        navigation.replace("LoginScreen");
      })
      .catch((error) => {
        console.error(error);
      });
    Keyboard.dismiss();
  };

  return (
    <>
      <StatusBar backgroundColor="black" />
      <View
        style={[
          styles.container,
          { backgroundColor: theme ? lightBg.primary : darkBg.primary },
        ]}
        // onTouchStart={() => Keyboard.dismiss()}
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
            onChangeText={(e) => dispatch(usernameHandler(e))}
          />
          {/* <Text
            style={[styles.label, { color: "red", paddingBottom: 10 }]}
          ></Text> */}
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
            onChangeText={(e) => dispatch(emailHandler(e))}
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
            onChangeText={(e) => dispatch(passwordHandler(e))}
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
            // onPress={() => navigation.replace("LoginScreen")}
            onPress={studentRegister}
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
    marginTop: -100,
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
