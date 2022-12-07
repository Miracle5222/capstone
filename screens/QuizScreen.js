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
import { Celeb, Exit, Java, Moon, Sun } from "../src/icons/Icons";
import { usernameLogin } from "../redux/feature/loginReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  dataHandler,
  moduleStatusHandler,
  updateHandler,
} from "../redux/feature/dataReducer";
// import { changeColor } from "../redux/feature/ColorReducer";
import { changeColor } from "../redux/feature/ColorReducer";
import Button from "../components/Button.component";
import { clearScore, scoreHandler } from "../redux/feature/quizReducer";
//fonts
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

{
  /* <Celeb bg={theme ? text.secondary : text.primary} />; */
}

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HEIGHT = height;

const QuizScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { darkBg, lightBg, text, theme, icon } = useSelector(
    (state) => state.color
  );
  const { baseUrl, multipleQuiz, codeQuiz, choice } = useSelector(
    (state) => state.module
  );
  const [index, setCurrIndex] = useState(0);
  const [scores, setScore] = useState(0);
  const ref = useRef(null);
  const [status, setStatus] = useState("");
  const [time, setTime] = useState([]);
  const [level, setLevel] = useState("");
  const [count, setCount] = useState(0);
  const [runTime, setRunTime] = useState(1);
  const [timeout, setTimeout] = useState(1);
  const { score, quiz_id } = useSelector((state) => state.quiz);
  const { fontSize } = useSelector((state) => state.content);
  const { email, password, currStudent_id, student_id, currUsername } =
    useSelector((state) => state.login);

  useEffect(() => {
    console.log("mymodule " + route.params.mymodule);
    console.log("student_id " + route.params.student_id);
    console.log("lessonId " + route.params.lesson_Id);
    console.log("module Id " + route.params.module_id);
    console.log("score " + score);
    console.log("quiz_id Id " + quiz_id);
  }, []);

  useEffect(() => {
    let quizzs = multipleQuiz.map((val) => {
      return val.time;
    });

    if (timeout == quizzs[index]) {
      setCurrIndex(index + 1);
    }
  }, []);

  const updateLesson = () => {
    fetch(`${baseUrl}route/updateLessonModule.php`, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        mymodule: route.params.mymodule,
        lesson_id: route.params.lessonId,
        module_id: route.params.module_id,
        score: score,
        student_id: student_id,
        quiz_id: quiz_id,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        // console.log(responseJson);
        dispatch(updateHandler());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const newTime = multipleQuiz.map((value) => {
      return value.time;
    });
    setTime(newTime);
  }, []);

  useEffect(() => {
    setCurrIndex(0);
    dispatch(clearScore());
  }, []);

  useEffect(() => {
    console.log(score);
    let quizz = multipleQuiz.map((val) => {
      return val.time;
    });

    setRunTime(quizz[index]);
    setTimeout(runTime);
    let interv = setInterval(() => {
      if (index === multipleQuiz.length - 1) {
        if (codeQuiz.length > 0) {
          navigation.replace("ProblemCode", {
            mymodule: route.params.mymodule,
            lessonId: route.params.lessonId,
            module_id: route.params.module_id,
            score: score,
            student_id: student_id,
            quiz_id: quiz_id,
          });
        } else {
          updateLesson();

          dispatch(clearScore());
          navigation.goBack();
        }
      } else {
        setCurrIndex(index + 1);
      }
    }, quizz[index] * 1000);

    return () => clearInterval(interv);
  }, [index]);

  useEffect(() => {
    let interv = setInterval(() => {
      // setTimeout(timeout - 1);
      setTimeout((prevTime) => prevTime + 1);
    }, 1000);
    setTimeout(0);
    return () => clearInterval(interv);
  }, [index]);

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
          alignItems: "flex-start",
        },
      ]}
      bg={theme ? lightBg.primary : darkBg.primary}
    >
      <View style={{ marginVertical: 20, marginLeft: 40 }}>
        <Text
          style={[
            { color: "#FF7700", fontSize: fontSize + 10, paddingTop: 40 },
          ]}
        >
          Multiple Choice
        </Text>
      </View>

      <View>
        <FlatList
          ref={ref}
          data={multipleQuiz}
          keyExtractor={(item) => item.question_id.toString()}
          initialScrollIndex={index}
          horizontal
          numRows={multipleQuiz.length + 1}
          // onEndReached={() => navigation.navigate("Code")}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemContainer}>
                <View style={styles.header}>
                  <View style={styles.items}>
                    <Text
                      style={[
                        {
                          color: theme ? text.dark : text.light,
                          fontSize: fontSize + 2,
                        },
                        styles.textHeader,
                      ]}
                    >
                      Status
                    </Text>
                    <Text
                      style={[
                        {
                          color: theme ? text.dark : text.light,
                          fontSize: fontSize + 2,
                        },
                        styles.textItem,
                      ]}
                    >
                      {`${index + 1}/${multipleQuiz.length}`}
                    </Text>
                  </View>
                  <View style={styles.items}>
                    <Text
                      style={[
                        {
                          color: theme ? text.dark : text.light,
                          fontSize: fontSize + 2,
                        },
                        styles.textHeader,
                      ]}
                    >
                      Time
                    </Text>
                    <Text
                      style={[
                        {
                          color: theme ? text.dark : text.light,
                          fontSize: fontSize + 2,
                        },
                        styles.textItem,
                      ]}
                    >
                      {/* {item.time} */}
                      {timeout}/{item.time} sec
                    </Text>
                  </View>
                  <View style={styles.items}>
                    <Text
                      style={[
                        {
                          color: theme ? text.dark : text.light,
                          fontSize: fontSize + 2,
                        },
                        styles.textHeader,
                      ]}
                    >
                      Level
                    </Text>
                    <Text
                      style={[
                        {
                          color: theme ? text.dark : text.light,
                          fontSize: fontSize + 2,
                        },
                        styles.textItem,
                      ]}
                    >
                      {item.difficulty_level}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.descriptionContainer,
                    { paddingTop: item.description.length > 80 ? 100 : 120 },
                  ]}
                >
                  <Text
                    style={{
                      color: theme ? text.dark : text.light,
                      fontSize: fontSize,
                    }}
                  >
                    {item.description.charAt(0).toUpperCase() +
                      item.description.slice(1)}
                  </Text>
                </View>
                <View style={styles.choicesContainer}>
                  {choice
                    .filter((val) => {
                      return val.question_id == item.question_id;
                    })
                    .map(({ answer, choice_description }, ind) => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.8}
                          key={ind}
                          style={styles.choicesItem}
                          onPress={() => {
                            // if (index === choice.length - 1) {
                            //   setVisible(!visible);
                            // }

                            if (!index === choice.length) {
                              setCount(count + 1);

                              setCurrIndex(index);
                            }
                            if (answer === "True") {
                              dispatch(scoreHandler());
                              // setScore(scores + 1);
                            }
                            if (index === multipleQuiz.length - 1) {
                              // if (answer === "true") {
                              //   setScore(scores + 1);
                              // }
                              if (codeQuiz.length > 0) {
                                navigation.replace("ProblemCode", {
                                  mymodule: route.params.mymodule,
                                  lessonId: route.params.lessonId,
                                  module_id: route.params.module_id,
                                  score: score,
                                  student_id: student_id,
                                  quiz_id: quiz_id,
                                });
                              } else {
                                updateLesson();

                                // dispatch(clearScore());
                                navigation.goBack();
                                // setVisible(!visible);
                              }
                            } else {
                              setCurrIndex(index + 1);
                            }
                          }}
                        >
                          <Text
                            style={{ color: text.light, fontSize: fontSize }}
                          >
                            {choice_description}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
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
    height: HEIGHT - 40,
  },
  itemContainer: {
    width: WIDTH,
    height: HEIGHT,
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

    borderBottomColor: "#021F26",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  textItem: {
    textAlign: "center",

    paddingVertical: 2,
  },
  items: {
    flexGrow: 0.8,
  },
  descriptionContainer: {
    width: "90%",

    paddingLeft: 20,
  },
  description: {
    fontSize: 18,
  },
  choicesContainer: {
    marginTop: 30,
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

  nextPhase: {
    flex: 1,

    zIndex: 99,
    borderRadius: 12,
    position: "absolute",
    top: HEIGHT / 4,
    left: WIDTH / 10,

    width: 280,
    height: 180,
    backgroundColor: "#FFE8C5",
  },
});
