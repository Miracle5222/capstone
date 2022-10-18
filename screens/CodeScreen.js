import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;
const CodeScreen = ({ navigation }) => {
  const { darkBg, lightBg, text, theme } = useSelector((state) => state.color);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Code Play Ground",
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

  const Top = createMaterialTopTabNavigator();

  const Problem = () => {
    return (
      <View
        style={{ backgroundColor: theme ? lightBg.primary : darkBg.primary }}
      >
        <Header size={18} color={theme ? text.dark : text.light}>
          <View style={styles.problem}>
            <Header
              color={theme ? text.dark : text.light}
              size={16}
              style={styles.heading}
            >
              Problem:
            </Header>
            <View style={styles.box}>
              <Paragraph
                color={theme ? text.dark : text.light}
                size={14}
                style={styles.discripton}
              >
                The quick brown fox jumps
              </Paragraph>
            </View>
          </View>
        </Header>
      </View>
    );
  };
  const ProblemCode = () => {
    const [index, setIndex] = useState([]);
    const [code, setCode] = useState("");

    // const numLineHandler = (e) => {
    //   // console.log((e.nativeEvent.contentSize.height / 20).toFixed()); // prints number of lines

    // };
    const textChange = (e) => {
      setCode(e);
    };
    const sendCode = () => {
      fetch(
        "https://52e1-2001-4455-16d-b00-e17f-abbe-d2fb-7acf.ap.ngrok.io/Test/code.php",
        {
          method: "post",
          header: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            code: code,
          }),
        }
      )
        .then((response) => response.text())
        .then((responseJson) => {
          // console.log(typeof responseJson);
          let parse = JSON.parse(responseJson);
          console.log(parse);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    return (
      <View
        style={{ backgroundColor: theme ? lightBg.primary : darkBg.primary }}
      >
        <View style={codeStyle.box}>
          <TouchableOpacity onPress={sendCode}>
            <Text style={{ color: "green" }}>Play</Text>
          </TouchableOpacity>
          <View style={codeStyle.sideBox}>
            <Paragraph
              color={theme ? text.dark : text.light}
              size={14}
              style={codeStyle.sideNumber}
            ></Paragraph>
          </View>

          <TextInput
            // onContentSizeChange={numLineHandler}
            onChangeText={textChange}
            multiline={true}
            style={codeStyle.textInput}
            numberOfLines={12}
          />
        </View>
      </View>
    );
  };
  const Output = () => {
    return (
      <Container bg={theme ? lightBg.primary : darkBg.primary}>
        <Header size={18} color={theme ? text.dark : text.light}>
          <Text>Output View</Text>
        </Header>
      </Container>
    );
  };

  return (
    <Top.Navigator
      initialRouteName="Problem"
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#00CDBD",
        tabBarLabelStyle: { fontWeight: "500", fontSize: 14 },
        tabBarInactiveTintColor: "#00596F",
        tabBarStyle: {
          borderBottomColor: "#00CDBD",
          backgroundColor: theme ? lightBg.primary : darkBg.primary,
        },
      }}
    >
      <Top.Screen
        name="Problem"
        component={Problem}
        options={{ tabBarLabel: "Problem" }}
      />
      <Top.Screen
        name="ProblemCode"
        component={ProblemCode}
        options={{ tabBarLabel: "Code" }}
      />
      <Top.Screen
        name="Output"
        component={Output}
        options={{ tabBarLabel: "Output" }}
      />
    </Top.Navigator>
  );
};
const styles = StyleSheet.create({
  problem: {
    alignContent: "flex-start",
    alignItems: "center",
    width: WIDTH,
    height: HIEGHT,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
    width: "90%",
    padding: 20,
    backgroundColor: "#171616",
  },
  heading: {
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 20,
  },
  discripton: {
    textAlign: "center",
  },
});

const codeStyle = StyleSheet.create({
  box: {
    alignContent: "flex-start",
    alignItems: "center",
    width: WIDTH,
    height: HIEGHT,
  },
  textInput: {
    width: "90%",
    color: "white",
    backgroundColor: "#131313",

    textAlign: "left",
    paddingLeft: 30,
    lineHeight: 20,
    textAlignVertical: "top",
  },
  sideNumber: {
    textAlign: "center",
  },
  sideBox: {
    left: 20,
    position: "absolute",
    zIndex: 99,
    width: 20,
    backgroundColor: "#171616",
  },
});
export default CodeScreen;
