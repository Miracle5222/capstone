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
  const [newpassword, setNewPassword] = useState("");
  const { darkBg, lightBg, text, theme, buttons } = useSelector(
    (state) => state.color
  );
  const { baseUrl, update } = useSelector((state) => state.module);
  const [updated, setUpdated] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Login",
      headerStyle: {
        backgroundColor: darkBg.primary,
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
      headerTintColor: theme ? text.dark : text.light, //color of title
    });
  }, [navigation]);

  const loginupdate = () => {
    if (email != "" && password != "") {
      fetch(`${baseUrl}/dist/api/forgotpassword.php`, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          // we will pass our input data to server
          email: email,
          password: password,
          newpassword: newpassword,
        }),
      })
        .then((response) => response.text())
        .then((responseJson) => {
          console.log(responseJson);

          let parse = JSON.parse(responseJson);

          if (parse[0].success != null) {
            navigation.replace("LoginScreen");
          }
          // if (parse != null) {
          //   alert("Password Updated Successfully");
          //   console.log(parse);
          //   // dispatch(student_idLogin(parse[0].student_id));
          //   // dispatch(emailLogin(parse[0].email));
          //   // dispatch(usernameLogin(parse[0].username));
          //   navigation.replace("LoginScreen");
          // } else {
          //   alert("Email and Password is Incorrect");
          // }

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
      } else if (newpassword == "") {
        alert("newpassword is empty");
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
        <View>
          {updated && <Text style={{ color: "white" }}>Updated</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, { borderColor: buttons.light }]}
            placeholder="Email"
            autoFocus={true}
            placeholderTextColor="#9D9D9D"
            onChangeText={(e) => setEmail(e)}
          />
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={[styles.input, { borderColor: buttons.light }]}
            placeholder="Current Password"
            secureTextEntry={true}
            placeholderTextColor="#9D9D9D"
            onChangeText={(e) => setPassword(e)}
          />
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={[styles.input, { borderColor: buttons.light }]}
            placeholder="New Password"
            secureTextEntry={true}
            placeholderTextColor="#9D9D9D"
            onChangeText={(e) => setNewPassword(e)}
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
            onPress={loginupdate}
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
