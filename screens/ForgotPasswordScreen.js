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
import { useTheme } from "@rneui/themed";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Login",
      headerStyle: {
        backgroundColor: theme.Bg.primary,
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: theme.Fontsize.small,
      },
      headerTintColor: "#fff",
    });
  }, [navigation]);
  return (
    <>
      <StatusBar backgroundColor="black" />
      <View
        style={[styles.container, { backgroundColor: theme.Bg.primary }]}
        onTouchStart={() => Keyboard.dismiss()}
      >
        <View>
          <Text
            style={[
              styles.text,
              {
                fontSize: theme.Fontsize.small,
                color: theme.buttonColors.secondary,
              },
            ]}
          >
            Reset Password
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={[styles.input, { borderColor: theme.buttonColors.primary }]}
            placeholder="Current Password"
            secureTextEntry={true}
            autoFocus={true}
            placeholderTextColor="#9D9D9D"
          />
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={[styles.input, { borderColor: theme.buttonColors.primary }]}
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
                backgroundColor: theme.buttonColors.primary,
              },
            ]}
            onPress={() => navigation.replace("LoginScreen")}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: theme.Fontsize.small,
                  color: theme.buttonColors.secondary,
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
