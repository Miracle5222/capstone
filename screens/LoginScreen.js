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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme();

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
                fontSize: theme.Fontsize.medium,
                color: theme.buttonColors.secondary,
              },
            ]}
          >
            Login
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { borderColor: theme.buttonColors.primary }]}
            placeholder="email"
            placeholderTextColor="#FFF"
            autoFocus={true}
          />
          <TextInput
            style={[styles.input, { borderColor: theme.buttonColors.primary }]}
            placeholder="password"
            secureTextEntry={true}
            placeholderTextColor="#FFF"
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.forgetpassword}>
            <Text
              style={{
                color: theme.buttonColors.secondary,
              }}
            >
              fotgot password?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.replace("ForgotPassword")}
            >
              <Text
                style={[
                  {
                    color: theme.color.primary,
                    paddingLeft: 5,
                  },
                ]}
              >
                press here
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: theme.buttonColors.primary,
              },
            ]}
            onPress={() => navigation.navigate("HomeScreen")}
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
              Sign-in
            </Text>
          </TouchableOpacity>
          <View style={[styles.registerContainer]}>
            <Text
              style={{
                color: theme.buttonColors.secondary,
              }}
            >
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={[
                  {
                    color: theme.color.primary,
                    paddingLeft: 5,
                  },
                ]}
              >
                Register
              </Text>
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
