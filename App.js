import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import { ThemeProvider, Button, createTheme } from "@rneui/themed";

const theme = createTheme({
  Bg: {
    primary: "#0D0D0D",
    secondary: "#141414",
  },
  buttonColors: {
    primary: "#021F26",
    secondary: "#FFFFFF",
  },
  lightColors: {
    primary: "#FFFFFF",
    secondary: "#EEEEEE",
  },
  Fontsize: {
    large: 46,
    medium: 32,
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
