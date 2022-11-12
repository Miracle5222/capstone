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
  const { baseUrl, multipleQuiz, choice } = useSelector(
    (state) => state.module
  );
  const [index, setCurrIndex] = useState(0);
  const [scores, setScore] = useState(0);
  const ref = useRef(null);
  const [status, setStatus] = useState("");
  const [time, setTime] = useState(0);
  const [level, setLevel] = useState("");
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const { score } = useSelector((state) => state.quiz);
  const { fontSize } = useSelector((state) => state.content);
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity
  //         style={{ marginRight: 9 }}
  //         onPress={() => dispatch(changeColor())}
  //       >
  //         {theme ? (
  //           <Sun bg={theme ? icon.light : icon.dark} />
  //         ) : (
  //           <Moon bg={theme ? icon.light : icon.dark} />
  //         )}
  //       </TouchableOpacity>
  //     ),
  //     headerShown: true,
  //     title: "Multiple Choice",
  //     headerStyle: {
  //       backgroundColor: theme ? lightBg.primary : darkBg.primary,
  //     },
  //     headerTitleStyle: {
  //       fontWeight: "500",
  //       fontSize: 18,
  //     },
  //     headerShadowVisible: false,
  //     headerTintColor: theme ? text.dark : text.light, //color of title
  //   });
  // }, [navigation, theme]);

  const updateLesson = () => {
    fetch(`${baseUrl}/startbootstrap-sb-admin/dist/api/updateLesson.php`, {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        lesson_id: route.params.id,
        module_id: route.params.module_id,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        dispatch(updateHandler());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // console.log(multipleQuiz);

  useEffect(() => {
    setCurrIndex(0);
    dispatch(clearScore());

    // console.log(route.params.id);
    // console.log(route.params.name);
  }, []);
  useEffect(() => {
    dispatch(scoreHandler(scores));

    let quizz = multipleQuiz.map((val) => {
      return val.time;
    });
    // if (index === quiz.length - 1) {
    //   dispatch(moduleStatusHandler(route.params.id));
    // }

    let interv = setInterval(() => {
      // console.log(quizz[index]);

      if (index === multipleQuiz.length - 1) {
        updateLesson();
        navigation.goBack();
      }
      setCurrIndex(index + 1);
    }, quizz[index] * 1000);

    return () => clearInterval(interv);
  }, [index]);

  useEffect(() => {
    console.log(scores);
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
      <View style={[styles.nextPhase, { display: visible ? "flex" : "none" }]}>
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
                      {`${index + 1}/${multipleQuiz.length}`}
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
                      {item.time + " sec"}
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
                      {item.difficulty_level}
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
                    {item.description}
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
                            if (answer === "true") {
                              setScore(scores + 1);
                            }
                            if (index === multipleQuiz.length - 1) {
                              if (answer === "true") {
                                setScore(scores + 1);
                              }
                              updateLesson();

                              dispatch(clearScore());
                              navigation.goBack();
                              // setVisible(!visible);
                            }

                            setCurrIndex(index + 1);
                          }}
                        >
                          <Text style={{ color: text.light }}>
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
    fontSize: 18,
    borderBottomColor: "#021F26",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  textItem: {
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 2,
  },
  items: {
    flexGrow: 0.8,
  },
  descriptionContainer: {
    width: "90%",
    paddingTop: 150,
    paddingLeft: 20,
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
