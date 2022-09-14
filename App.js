import * as React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import { ThemeProvider, Button, createTheme } from "@rneui/themed";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegistrationScreen";
import ForgotPassword from "./screens/ForgotPasswordScreen";
import { theme } from "./theme";
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { darkBg, lightBg, text, theme } = useSelector((state) => state.color);
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
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
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
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
