import { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";

import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegistrationScreen";
import ForgotPassword from "./screens/ForgotPasswordScreen";
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import ContentScreen from "./screens/ContentScreen";
import {
  doneHandler,
  unlockHandler,
  lockHandler,
  lengthHandler,
  multipleQuizHandler,
  choicesQuizHandler,
} from "./redux/feature/dataReducer";
import { indexInitialState } from "./redux/feature/contentReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { progressBar } from "./redux/feature/dataReducer";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { darkBg, lightBg, text, theme } = useSelector((state) => state.color);
  const { email, username, student_id } = useSelector((state) => state.login);
  const { baseUrl, update } = useSelector((state) => state.module);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${baseUrl}/dist/control/test.php`, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((responseJson) => {
        let parse = JSON.parse(responseJson);
        // console.log(parse.data.choices);
        // dispatch(multipleQuizHandler(parse.data.questions));
        dispatch(choicesQuizHandler(parse.data.choices));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`${baseUrl}/dist/api/progress.php`, {
  //     method: "post",
  //     header: {
  //       Accept: "application/json",
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       student_id: student_id,
  //     }),
  //   })
  //     .then((response) => response.text())
  //     .then((responseJson) => {
  //       // console.log(responseJson);

  //       let parse = JSON.parse(responseJson);
  //       dispatch(doneHandler(parse.data.done));
  //       dispatch(unlockHandler(parse.data.unlock));
  //       dispatch(lockHandler(parse.data.lock));
  //       dispatch(lengthHandler(parse.data.leagth));
  //       // setLength(parse.data.length);
  //       // setDone(parse.data.done);
  //       // setUnLock(parse.data.unlock);
  //       // setLock(parse.data.lock);
  //       // console.log(parse.data[0].sub_lesson);
  //       // setSubLesson(parse.data[0].sub_lesson);

  //       dispatch(
  //         progressBar(((parse.data.done * 100) / parse.data.length).toFixed())
  //       );
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [update]);

  return (
    <>
      <StatusBar
        style={{ color: "light" }}
        // dark-content, light-content and default
        hidden={false}
        //To hide statusBar
        backgroundColor={theme ? "orangered" : "#00BCD4"}
        //Background color of statusBar
        translucent={false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      />
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName={
          //   email != "" && username != "" ? "HomeScreen" : "LandingScreen"
          // }
          initialRouteName="LandingScreen"
          screenOptions={{
            headerShown: false,
            headerTintColor: theme ? text.dark : text.light,
            headerStyle: {
              backgroundColor: theme ? lightBg.primary : darkBg.primary,
            },
          }}
        >
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ContentScreen" component={ContentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
