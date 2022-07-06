import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useTheme } from "@rneui/themed";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme();

  return (
    <>
      <StatusBar backgroundColor="black" />
      <View style={[styles.container, { backgroundColor: theme.Bg.primary }]}>
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
          <TextInput style={styles.input} placeholder="email" />
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry={true}
          />
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    width: "100%",
  },
});
