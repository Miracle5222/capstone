import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListsItems } from "../components/Lists.component";
import { useState, useEffect, useLayoutEffect } from "react";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { useSelector, useDispatch } from "react-redux";
import {
  contentHandler,
  indexInitialState,
} from "../redux/feature/contentReducer";
import {
  contentStatus,
  contentIdHandler,
  multipleQuizHandler,
  choicesQuizHandler,
  codeQuizQuizHandler,
} from "../redux/feature/dataReducer";
import QuizScreen from "./QuizScreen";
import { Celeb, Exit, Moon, Sun } from "../src/icons/Icons";
import Button from "../components/Button.component";
import { changeColor } from "../redux/feature/ColorReducer";
import { clearScore, quizIdHandler } from "../redux/feature/quizReducer";

const Quiz = createNativeStackNavigator();

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HEIGHT = height;

const QuizHomeScreen = ({ route, navigation }) => {
  const [qestions, setQuestions] = useState([]);
  const dispatch = useDispatch();
  const { darkBg, lightBg, text, theme, icon, quizColor } = useSelector(
    (state) => state.color
  );
  const { fontSize } = useSelector((state) => state.content);
  const { baseUrl, multipleQuiz, choice, codeQuiz, update } = useSelector(
    (state) => state.module
  );
  const [visible, setVisible] = useState(false);
  const { score, quiz_id } = useSelector((state) => state.quiz);
  const { email, password, currStudent_id, student_id, currUsername } =
    useSelector((state) => state.login);
  const [results, setResult] = useState([]);

  const length = multipleQuiz.length + codeQuiz.length;

  // useEffect(() => {
  //   dispatch(clearScore());

  //   // console.log(route.params.id);
  //   // console.log(route.params.name);
  // }, []);

  useEffect(() => {
    fetch(`${baseUrl}/dist/api/result.php`, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        student_id: student_id,
        module_id: route.params.module_id,
        quiz_id: quiz_id,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        // console.log(responseJson);
        let parse = JSON.parse(responseJson);
        setResult(parse.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [quiz_id, update]);

  useEffect(() => {
    fetch(`${baseUrl}/dist/control/test.php`, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        module_id: route.params.module_id,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        // console.log(responseJson);

        let parse = JSON.parse(responseJson);
        // console.log(parse);
        let response = parse.data.questions
          .filter((fil) => {
            return fil.module_id == route.params.module_id;
          })
          .map((value) => {
            dispatch(quizIdHandler(value.quiz_id));
            return value;
          });
        let code = response
          .filter((val) => {
            return val.question_type == "Problem Solving";
          })
          .map((problem) => {
            return problem;
          });
        let multipleChoice = response
          .filter((val) => {
            return val.question_type == "Multiple Choice";
          })
          .map((problem) => {
            return problem;
          });
        dispatch(codeQuizQuizHandler(code));
        dispatch(choicesQuizHandler(parse.data.choices));
        dispatch(multipleQuizHandler(multipleChoice));

        // dispatch(multipleQuizHandler(parse.data.questions));
        // dispatch(choicesQuizHandler(parse.data.choices));

        // dispatch(multipleQuizHandler(parse.questions.));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    dispatch(clearScore());
  }, []);

  const QuizLandingScreen = () => {
    return (
      <Container
        style={[
          {
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
        bg={theme ? lightBg.primary : darkBg.primary}
      >
        <View
          style={[styles.nextPhase, { display: visible ? "flex" : "none" }]}
        >
          <View style={{ position: "absolute", right: 10, zIndex: 100 }}>
            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);
              }}
            >
              <Exit />
            </TouchableOpacity>
          </View>
          <View
            style={{
              fontSize: fontSize,
              alignItems: "center",
            }}
          >
            <Text
              style={[{ color: "#FF7700", fontSize: fontSize, paddingTop: 40 }]}
            >
              Test 1 Complete!
            </Text>
          </View>
          <View
            style={{
              height: "100%",
              justifyContent: "space-around",
              alignItems: "flex-end",
              flexDirection: "row",
              marginTop: -100,
            }}
          >
            <Celeb bg={"#FF7700"} />
            <Button event={() => navigation.navigate("Code")}>
              <Text
                style={[
                  { color: theme ? text.dark : text.light },
                  styles.textItem,
                ]}
              >
                Continue
              </Text>
            </Button>
          </View>
        </View>

        <View style={[styles.codingContainer]}>
          <View>
            <Text
              style={[
                {
                  color: text.light,
                  fontSize: fontSize + 8,
                  marginTop: -20,
                  textAlign: "center",
                },
              ]}
            >
              {route.params.moduleTitle}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              width: WIDTH - 40,
              alignItems: "center",

              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={[
                styles.quizzes,
                { display: multipleQuiz.length === 0 ? "none" : "flex" },
              ]}
              onPress={() =>
                navigation.navigate("MultipleChoice", {
                  lesson_id: route.params.id,
                  name: route.params.name,
                  module_id: route.params.module_id,
                  score: score,
                  quiz_id: quiz_id,
                })
              }
            >
              <Text style={[{ color: text.light }]}>Multiple Choice</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.quizzes,
                { display: codeQuiz.length === 0 ? "none" : "flex" },
              ]}
              onPress={() =>
                navigation.navigate("ProblemCode", {
                  lesson_id: route.params.id,
                  name: route.params.name,
                  module_id: route.params.module_id,
                  score: score,
                  quiz_id: quiz_id,
                })
              }
            >
              <Text style={[{ color: text.light }]}>Problem Solving</Text>
            </TouchableOpacity>
          </View>

          <Text
            style={[
              {
                color: theme ? text.dark : text.light,
                alignSelf: "flex-start",
                marginLeft: 20,
                marginBottom: 20,

                fontSize: fontSize,
              },
            ]}
          >
            Results
          </Text>
          <View
            style={[
              styles.scoreResult,
              {
                backgroundColor: theme
                  ? quizColor.lightPrimary
                  : quizColor.darkPrimary,
              },
            ]}
          >
            <View style={styles.resultContainer}>
              <View>
                <Text
                  style={[
                    {
                      color: text.light,
                      fontSize: fontSize,
                    },
                  ]}
                >
                  Quiz ID
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    {
                      color: text.light,
                      fontSize: fontSize,
                    },
                  ]}
                >
                  Time Ended
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    {
                      color: text.light,
                      fontSize: fontSize,
                    },
                  ]}
                >
                  Total Score
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    {
                      color: text.light,
                      fontSize: fontSize,
                    },
                  ]}
                >
                  Status
                </Text>
              </View>
            </View>
            {results ? (
              <FlatList
                data={results}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={[
                        styles.resultContainer,
                        { paddingTop: 30, paddingRight: 20 },
                      ]}
                    >
                      <View>
                        <Text
                          style={[
                            {
                              color: text.light,
                              fontSize: fontSize,
                            },
                          ]}
                        >
                          {item.quiz_id}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            {
                              color: text.light,
                              fontSize: fontSize,
                            },
                          ]}
                        >
                          {item.ended_at}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            {
                              color: text.light,
                              fontSize: fontSize,
                            },
                          ]}
                        >
                          {item.score}/ {length}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            {
                              color:
                                item.status === "Failed"
                                  ? "#F4002C"
                                  : "#00F444",
                              fontSize: fontSize,
                            },
                          ]}
                        >
                          {item.status}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            ) : (
              <View>
                <Text
                  style={[
                    {
                      color: text.light,
                      fontSize: fontSize,
                    },
                  ]}
                >
                  No Results.
                </Text>
              </View>
            )}
          </View>
        </View>
      </Container>
    );
  };

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
  return (
    <>
      <Quiz.Navigator screenOptions={{ headerShown: false }}>
        <Quiz.Screen name="QuizLanding" component={QuizLandingScreen} />
        <Quiz.Screen name="MultipleChoice" component={QuizScreen} />
        <Quiz.Screen name="Coding" component={QuizScreen} />
      </Quiz.Navigator>
    </>
  );
};

export default QuizHomeScreen;

const styles = StyleSheet.create({
  resultContainer: {
    padding: 8,
    justifyContent: "space-around",
    alignItems: "center",

    flexDirection: "row",
    width: "100%",
  },
  scrolViewContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    flex: 1,
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
  multiple: {},
  coding: {},
  multipleContainer: {
    flex: 0.5,
    width: WIDTH,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  },
  quizzes: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "red",
  },
  codingContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 0.8,
    width: WIDTH,
    marginHorizontal: 20,
  },
  scoreResult: {
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH - 40,
    borderRadius: 12,
    height: "70%",
    marginHorizontal: 10,
  },
});
