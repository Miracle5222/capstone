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

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { darkBg, lightBg, text, theme, buttons } = useSelector(
    (state) => state.color
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Login",
      headerStyle: {
        backgroundColor: darkBg.primary,
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 14,
      },
      headerTintColor: theme ? text.dark : text.light, //color of title
    });
  }, [navigation]);

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
            Reset Password
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={[styles.input, { borderColor: buttons.light }]}
            placeholder="Current Password"
            secureTextEntry={true}
            autoFocus={true}
            placeholderTextColor="#9D9D9D"
          />
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={[styles.input, { borderColor: buttons.light }]}
            placeholder="New Password"
            secureTextEntry={true}
            autoFocus={true}
            placeholderTextColor="#9D9D9D"
          />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: buttons.light,
              },
            ]}
            onPress={() => navigation.replace("LoginScreen")}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: 14,
                  color: text.light,
                },
              ]}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    marginTop: -100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "400",
    paddingBottom: 50,
  },
  label: {
    paddingLeft: 12,
    color: "white",
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
