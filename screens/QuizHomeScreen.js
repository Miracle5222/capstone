import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
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
import { Moon, Sun } from "../src/icons/Icons";
import Button from "../components/Button.component";
import { changeColor } from "../redux/feature/ColorReducer";
import { clearScore } from "../redux/feature/quizReducer";

const Quiz = createNativeStackNavigator();

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;

const QuizHomeScreen = ({ route, navigation }) => {
  const [qestions, setQuestions] = useState([]);
  const dispatch = useDispatch();
  const { darkBg, lightBg, text, theme, icon, quizColor } = useSelector(
    (state) => state.color
  );
  const { fontSize } = useSelector((state) => state.content);
  const { baseUrl, multipleQuiz, choice, codeQuiz } = useSelector(
    (state) => state.module
  );
  const { score } = useSelector((state) => state.quiz);
  useEffect(() => {
    dispatch(clearScore());

    // console.log(route.params.id);
    // console.log(route.params.name);
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/startbootstrap-sb-admin/dist/control/test.php`, {
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
            return value;
          });
        let code = response
          .filter((val) => {
            return val.question_type == "Problem Solving";
          })
          .map((problem) => {
            return problem;
          });
        dispatch(codeQuizQuizHandler(code));

        dispatch(multipleQuizHandler(response));

        // dispatch(multipleQuizHandler(parse.data.questions));
        // dispatch(choicesQuizHandler(parse.data.choices));

        // dispatch(multipleQuizHandler(parse.questions.));
      })
      .catch((error) => {
        console.error(error);
      });
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
        <View style={styles.multipleContainer}>
          {/* <TouchableOpacity style={styles.multiple}>
            <Text>Multiple Choice</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.quizzes}
            onPress={() =>
              navigation.navigate("MultipleChoice", {
                id: route.params.id,
                name: route.params.name,
                module_id: route.params.module_id,
              })
            }
          >
            <Text style={[{ color: text.light }]}>Multiple Choice</Text>
          </TouchableOpacity>

          <View
            style={[
              styles.scoreResult,
              {
                backgroundColor: theme
                  ? quizColor.lightSecondary
                  : quizColor.darkSecondary,
              },
            ]}
          >
            <Text
              style={[
                {
                  color: text.light,
                  fontSize: fontSize + 15,
                },
              ]}
            >
              Score: {score}
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.codingContainer,
            { display: route.params.id[0] === "1" ? "none" : "flex" },
          ]}
        >
          <TouchableOpacity
            style={styles.quizzes}
            onPress={() =>
              navigation.navigate("ProblemCode", {
                id: route.params.id,
                name: route.params.name,
                module_id: route.params.module_id,
              })
            }
          >
            <Text style={[{ color: text.light }]}>Problem Solving</Text>
          </TouchableOpacity>
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
            <Text
              style={[
                {
                  color: text.light,
                  fontSize: fontSize + 15,
                },
              ]}
            >
              Score: {score}
            </Text>
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
    flex: 0.5,
    width: WIDTH,
    marginHorizontal: 20,
  },
  scoreResult: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: WIDTH - 40,
    borderRadius: 12,
    height: "70%",
    marginHorizontal: 10,
  },
});
