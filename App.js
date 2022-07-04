import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import { ThemeProvider, Button, createTheme } from '@rneui/themed';

const theme = createTheme({
  Button: {
    raised: true,
  },
  Bg:{
    primary:'#0D0D0D',
  },
  Fontsize:{
    large:46,
    medium:32,
    small:18,
    extraSmall:12
  },
  color:{
    orange:'#FF7700',
  }
});


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
      <ThemeProvider theme={theme}>
      <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
              <Stack.Screen name="LandingScreen" component={LandingScreen} />
            </Stack.Navigator>
          </NavigationContainer>
      </ThemeProvider>
  );
}

export default App;


const styled = StyleSheet.compose({

container: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',

}

})