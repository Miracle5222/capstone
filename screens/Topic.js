import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import Progressbar from "../components/Progressbar.component";
import { Inter_100Thin } from "@expo-google-fonts/inter";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { Home } from "../Data";

import { useSelector, useDispatch } from "react-redux";
//icons
import { Java, Moon, Sun } from "../src/icons/Icons";
import { usernameLogin } from "../redux/feature/loginReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dataHandler } from "../redux/feature/dataReducer";
// import { changeColor } from "../redux/feature/ColorReducer";
import { changeColor } from "../redux/feature/ColorReducer";
//fonts
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { subLessonHandler, codeHandler } from "../redux/feature/dataReducer";
const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;

const Topic = ({ navigation }) => {
  const dispatch = useDispatch();
  const { darkBg, lightBg, text, theme, icon } = useSelector(
    (state) => state.color
  );

  const { data } = useSelector((state) => state.module);

  const { email, password, username } = useSelector((state) => state.login);

  const [code, setCode] = useState([]);
  const [sub_lesson, setSubLesson] = useState([]);

  useEffect(() => {
    fetch(
      "https://fd5c-2001-4455-170-8100-64b7-cfcb-aad5-8ccc.ap.ngrok.io/startbootstrap-sb-admin/dist/control/sub_lesson.php",
      {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((responseJson) => {
        // console.log(responseJson);
        let parse = JSON.parse(responseJson);
        // console.log(parse.data[0].sub_lesson);
        // setSubLesson(parse.data[0].sub_lesson);
        dispatch(codeHandler(parse.data[1].snippets));
        dispatch(subLessonHandler(parse.data[0].sub_lesson));
        // setCode(parse.data[1].snippets);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 9 }}
          onPress={() => dispatch(changeColor())}
        >
          {theme ? (
            <Sun bg={theme ? icon.light : icon.dark} />
          ) : (
            <Moon bg={theme ? icon.light : icon.dark} />
          )}
        </TouchableOpacity>
      ),
      headerShown: true,
      title: "Language",
      headerStyle: {
        backgroundColor: theme ? lightBg.primary : darkBg.primary,
      },
      headerTitleStyle: {
        fontWeight: "500",
        fontSize: 18,
      },
      headerShadowVisible: false,
      headerTintColor: theme ? text.dark : text.light, //color of title
    });
  }, [navigation, theme]);

  return (
    <>
      <Container bg={theme ? lightBg.primary : darkBg.primary}>
        <View style={styles.headerBox}>
          <Header color={theme ? text.dark : text.light} size={42}>
            Hello, {username}
          </Header>
          <Paragraph color={theme ? text.dark : text.light} size={14}>
            Start learning your first programming language
          </Paragraph>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.boxContainer,
            {
              backgroundColor: theme ? lightBg.secondary : darkBg.secondary,
            },
          ]}
          onPress={() => navigation.navigate("Lesson")}
        >
          {data.map((val, index) => {
            return (
              <Header
                key={index}
                size={24}
                color={theme ? text.dark : text.light}
              >
                {val.language}
              </Header>
            );
          })}
          <View style={styles.progressBar}>
            <Java />
            <Progressbar />
          </View>
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default Topic;

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: -180,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    width: "90%",
    height: 200,

    borderRadius: 20,
  },
  headerBox: {
    marginTop: -200,
    width: "90%",
  },

  progressBar: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",

    marginTop: -40,
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
  },
});
