import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
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
import { changeColor } from "../redux/feature/colorReducer";
import Button from "../components/Button.component";
import { clearScore, scoreHandler } from "../redux/feature/quizReducer";
//fonts
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;

const QuizScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { darkBg, lightBg, text, theme, icon } = useSelector(
    (state) => state.color
  );
  const [index, setCurrIndex] = useState(0);
  const { score } = useSelector((state) => state.quiz);
  const ref = useRef(null);
  const [status, setStatus] = useState("");
  const [time, setTime] = useState();
  const [level, setLevel] = useState("");
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(count);
  //     setCount(count + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const [quiz, setQuiz] = useState([
    {
      key: "1",
      time: 15,
      difficulty: "easy",
      type: "multiple choice",
      discription:
        "Which of the following is the correct syntax to add the header file in the C++ program?",
      choices: [
        { answer: "a. #include<userdefined>", isCorrect: true },
        { answer: "a. #include<userdefined>", isCorrect: false },
        { answer: "a. #include<userdefined>", isCorrect: false },
      ],
    },
    {
      key: "2",
      time: 20,
      difficulty: "medium",
      type: "multiple choice",
      discription:
        "Which of the following is the correct syntax to add the header file in the C++ program?",
      choices: [
        { answer: "a. #include<userdefined>", isCorrect: false },
        { answer: "a. #include<userdefined>", isCorrect: true },
        { answer: "a. #include<userdefined>", isCorrect: false },
      ],
    },
    {
      key: "3",
      time: 15,
      difficulty: "easy",
      type: "multiple choice",
      discription:
        "Which of the following is the correct syntax to add the header file in the C++ program?",
      choices: [
        { answer: "a. #include<userdefined>", isCorrect: false },
        { answer: "b. #include 'userdefined.h'", isCorrect: true },
        { answer: "c. Both A and B", isCorrect: false },
      ],
    },
  ]);
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
      title: "Quiz",
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

  useEffect(() => {
    setCurrIndex(0);
    dispatch(clearScore());

    console.log(route.params.id);
    console.log(route.params.name);
  }, []);

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      // viewPosition: 0,
    });
  }, [index]);

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
      <View>
        <FlatList
          ref={ref}
          data={quiz}
          keyExtractor={(item) => item.key}
          initialScrollIndex={index}
          horizontal
          scrollEnabled={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemContainer}>
                <View style={styles.header}>
                  <View style={styles.items}>
                    <Text
                      style={[
                        { color: theme ? text.dark : text.light },
                        styles.textHeader,
                      ]}
                    >
                      Status
                    </Text>
                    <Text
                      style={[
                        { color: theme ? text.dark : text.light },
                        styles.textItem,
                      ]}
                    >
                      {`${index + 1}/${quiz.length}`}
                    </Text>
                  </View>
                  <View style={styles.items}>
                    <Text
                      style={[
                        { color: theme ? text.dark : text.light },
                        styles.textHeader,
                      ]}
                    >
                      Time
                    </Text>
                    <Text
                      style={[
                        { color: theme ? text.dark : text.light },
                        styles.textItem,
                      ]}
                    >
                      {}
                      {item.time}
                    </Text>
                  </View>
                  <View style={styles.items}>
                    <Text
                      style={[
                        { color: theme ? text.dark : text.light },
                        styles.textHeader,
                      ]}
                    >
                      Level
                    </Text>
                    <Text
                      style={[
                        { color: theme ? text.dark : text.light },
                        styles.textItem,
                      ]}
                    >
                      {item.difficulty}
                    </Text>
                  </View>
                </View>
                <View style={styles.descriptionContainer}>
                  <Text
                    style={[
                      { color: theme ? text.dark : text.light },
                      styles.description,
                    ]}
                  >
                    {item.discription}
                  </Text>
                </View>
                <View style={styles.choicesContainer}>
                  {item.choices.map((val, ind) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      key={ind}
                      style={styles.choicesItem}
                      onPress={() => {
                        if (index === item.choices.length - 1) {
                          navigation.goBack();
                          dispatch(clearScore());
                        }
                        if (val.isCorrect) {
                          dispatch(scoreHandler());
                        }
                        setCount(count + 1);
                        setCurrIndex(index + 1);
                      }}
                    >
                      <Text style={{ color: text.light }}>{val.answer}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                {/* <View style={styles.buttonContainer}>
              <Button event={() => setCurrIndex(index + 1)}>
                <Text style={[{ color: theme ? text.dark : text.light }]}>
                  Next
                </Text>
              </Button>
            </View> */}
              </View>
            );
          }}
        />
      </View>
    </Container>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#021F26",
    width: WIDTH - 40,
    height: HIEGHT - 40,
  },
  itemContainer: {
    width: WIDTH,
    height: HIEGHT,
    flex: 1,
    alignItems: "center",
  },
  header: {
    position: "absolute",
    width: "90%",
    height: 100,
    flexDirection: "row",
  },
  textHeader: {
    textAlign: "center",
    fontSize: 18,
    borderBottomColor: "#021F26",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  textItem: {
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 8,
  },
  items: {
    flexGrow: 0.8,
  },
  descriptionContainer: {
    width: "90%",
    paddingTop: 150,
  },
  description: {
    fontSize: 18,
  },
  choicesContainer: {
    marginTop: 50,
    width: "80%",
  },
  choicesItem: {
    borderRadius: 8,
    backgroundColor: "#021F26",
    padding: 15,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 10,
    marginRight: 20,
    width: "80%",
    alignItems: "flex-end",
  },
});
