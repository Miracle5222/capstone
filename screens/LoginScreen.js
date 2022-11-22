import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import {
  emailLogin,
  passwordLogin,
  usernameLogin,
  student_idLogin,
  userHandler,
} from "../redux/feature/loginReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  doneHandler,
  lengthHandler,
  lockHandler,
  unlockHandler,
} from "../redux/feature/dataReducer";

const LoginScreen = ({ navigation }) => {
  const { baseUrl, update } = useSelector((state) => state.module);
  const dispatch = useDispatch();
  const { erEmail, setErrEmail } = useState(null);
  const { erpass, setErrPass } = useState(null);
  const { darkBg, lightBg, text, theme, buttons, sizes } = useSelector(
    (state) => state.color
  );
  const { email, password, currStudent_id, student_id, currUsername, user } =
    useSelector((state) => state.login);

  const login = () => {
    if (email != "" && password != "") {
      fetch(`${baseUrl}/dist/api/login.php`, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          // we will pass our input data to server
          email: email,
          password: password,
        }),
      })
        .then((response) => response.text())
        .then((responseJson) => {
          console.log(responseJson);
          let parse = JSON.parse(responseJson);
          if (parse[0].email != "false" && parse[0].password != "false") {
            console.log(parse[0].email);
            dispatch(student_idLogin(parse[0].student_id));
            dispatch(emailLogin(parse[0].email));
            dispatch(usernameLogin(parse[0].username));
            navigation.replace("HomeScreen");
          } else {
            alert("Email and Password is Incorrect");
          }

          // if (parse.length > 0) {
          //   dispatch(userHandler(parse));
          //   dispatch(student_idLogin(parse[0].student_id));
          //   dispatch(emailLogin(parse[0].email));
          //   dispatch(usernameLogin(parse[0].username));
          //   navigation.replace("HomeScreen");
          // } else {
          //   alert("Make sure field is not empty");
          // }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      if (email == "" && password == "") {
        alert("Email and Password is empty");
      } else if (email == "") {
        alert("Email is empty");
        // setErrEmail("Please enter email");
      } else if (password == "") {
        alert("password is empty");
        // setErrPass("Please enter password");
      }
    }

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
            style={[
              styles.input,
              { borderColor: "#00596F", color: theme ? text.dark : text.light },
            ]}
            placeholder="email"
            placeholderTextColor="#9D9D9D"
            autoFocus={true}
            onChangeText={(e) => dispatch(emailLogin(e))}
          />
          <Text style={{ color: "red" }}>{erEmail}</Text>
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
            onChangeText={(e) => dispatch(passwordLogin(e))}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.forgetpassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
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
            onPress={login}
            // onPress={() => navigation.navigate("HomeScreen")}
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
    marginTop: -100,
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
