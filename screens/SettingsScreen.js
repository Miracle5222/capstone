import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { changeColor } from "../redux/feature/colorReducer";
import { Moon, Sun } from "../src/icons/Icons";
const SettingsScreen = ({ navigation }) => {
  const { darkBg, lightBg, text, theme ,icon} = useSelector((state) => state.color);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 25 }}
          onPress={() => dispatch(changeColor())}
        >
          {theme ? (
            <Sun bg={theme ? icon.light : icon.dark} />
          ) : (
            <Moon bg={theme ? icon.light : icon.dark} />
          )}
        </TouchableOpacity>
      ),
      title: "Settings",
      headerStyle: {
        backgroundColor: theme ? lightBg.primary : darkBg.primary,
      },
      headerTitleStyle: {
        fontWeight: "300",
        fontSize: 18,
      },
      headerShadowVisible: false,
      headerTintColor: theme ? text.dark : text.light, //color of title
    });
  }, [navigation, theme]);
  return (
    <Container
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
      bg={theme ? lightBg.primary : darkBg.primary}
    >
      <Paragraph color={theme ? text.dark : text.light} size={14}>
        Mary Grace Buagas
      </Paragraph>
    </Container>
  );
};

export default SettingsScreen;
