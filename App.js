import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import { ThemeProvider, Button, createTheme } from "@rneui/themed";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegistrationScreen";
import ForgotPassword from "./screens/ForgotPasswordScreen";

const theme = createTheme({
  Bg: {
    primary: "#0D0D0D",
    secondary: "#141414",
  },
  buttonColors: {
    primary: "#00596F",
    secondary: "#FFFFFF",
  },
  lightColors: {
    primary: "#FFFFFF",
    secondary: "#EEEEEE",
  },
  color: {
    primary: "#00CDBD",
    secondary: "#FFFFFF",
  },
  Fontsize: {
    large: 46,
    medium: 36,

    small: 18,
    extraSmall: 12,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
