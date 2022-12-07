import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import Progressbar from "../components/Progressbar.component";
import { Inter_100Thin } from "@expo-google-fonts/inter";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { Home } from "../Data";

import { useSelector, useDispatch } from "react-redux";
//icons
import { Java, Moon, Sun } from "../src/icons/Icons";
import {
  currEmailLogin,
  currStudent_idLogin,
  currUsernameLogin,
  usernameLogin,
} from "../redux/feature/loginReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  choicesQuizHandler,
  dataHandler,
  doneHandler,
  lengthHandler,
  lockHandler,
  multipleQuizHandler,
  progressBar,
  unlockHandler,
} from "../redux/feature/dataReducer";
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
  const { fontSize } = useSelector((state) => state.content);

  const { data, update, baseUrl, result, language, languageID } = useSelector(
    (state) => state.module
  );
  const { email, password, username, user, student_id } = useSelector(
    (state) => state.login
  );
  const [code, setCode] = useState([]);
  const [sub_lesson, setSubLesson] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}route/progress.php`, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        student_id: student_id,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        // console.log(responseJson);
        let parse = JSON.parse(responseJson);
        let length = parse.data.length;
        // console.log(parse);
        if (
          parse.data.done === 0 &&
          parse.data.unlock === 0 &&
          parse.data.lock === 0
        ) {
          dispatch(doneHandler(0));
          dispatch(unlockHandler(0));
          dispatch(lockHandler(0));
          dispatch(lengthHandler(length));
        } else {
          let parse = JSON.parse(responseJson);

          let done = parse.data.done;
          let unlock = parse.data.unlock;

          let lock = parse.data.lock;
          dispatch(doneHandler(done));
          dispatch(unlockHandler(unlock));
          dispatch(lockHandler(lock));
          dispatch(lengthHandler(length));

          dispatch(
            progressBar((parse.data.done * 100) / parse.data.length.toFixed())
          );
        }

        // setLength(parse.data.length);
        // setDone(parse.data.done);
        // setUnLock(parse.data.unlock);
        // setLock(parse.data.lock);
        // console.log(parse.data[0].sub_lesson);
        // setSubLesson(parse.data[0].sub_lesson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [update]);

  useEffect(() => {}, []);

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
  }, [navigation, theme, result]);

  return (
    <>
      {student_id ? (
        <Container bg={theme ? lightBg.primary : darkBg.primary}>
          <View style={styles.headerBox}>
            <Header color={theme ? text.dark : text.light} size={fontSize + 24}>
              Hello, {username}
            </Header>
            <Paragraph color={theme ? text.dark : text.light} size={fontSize}>
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
            <Header size={fontSize + 12} color={theme ? text.dark : text.light}>
              {language}
            </Header>

            <View style={styles.progressBar}>
              <Java />
              <Progressbar />
            </View>
          </TouchableOpacity>
        </Container>
      ) : (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
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
