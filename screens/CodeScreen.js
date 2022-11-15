import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { changeColor } from "../redux/feature/ColorReducer";
import { Moon, Play, Sun } from "../src/icons/Icons";
import { codeHandler } from "../redux/feature/codeReducer";
import { BottomSheet } from "react-native-btr";
import { Highlighter } from "../components/CodeHighlighter.component";
import { updateHandler } from "../redux/feature/dataReducer";
import { scoreHandler } from "../redux/feature/quizReducer";

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;

const CodeScreen = ({ navigation, route }) => {
  const { codeResult } = useSelector((state) => state.code);
  const dispatch = useDispatch();
  const { darkBg, lightBg, text, theme, icon } = useSelector(
    (state) => state.color
  );
  const { currStudent_id } = useSelector((state) => state.login);
  const [descript, setDescription] = useState("");
  const [time, setTime] = useState(0);
  const [level, setLevel] = useState("");
  const [index, setIndex] = useState(0);
  const { baseUrl, multipleQuiz, codeQuiz, choice } = useSelector(
    (state) => state.module
  );
  const { score, quiz_id } = useSelector((state) => state.quiz);
  // console.log(codeResult);
  const Top = createMaterialTopTabNavigator();
  const [curIndex, setCurIndex] = useState(0);

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
      title: "Problem Solving",
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
  // console.log(codeQuiz);
  // console.log(codeQuiz.length);
  // useEffect(() => {
  //   console.log(codeQuiz[0].description);
  //   let interval = setInterval(() => {
  //     setDescription(codeQuiz[index].description);
  //     if (index != codeQuiz.length - 1) {
  //       setIndex(index + 1);
  //       console.log(codeQuiz[index].description);
  //     } else {
  //       navigation.goBack();
  //     }
  //   }, codeQuiz[index].time * 1000);

  //   return () => clearInterval(interval);
  // }, [index]);

  useEffect(() => {
    let quizz = codeQuiz.map((val) => {
      return val.time;
    });
    setDescription(codeQuiz[index].description);
    setLevel(codeQuiz[index].difficulty_level);
    setTime(codeQuiz[index].time);
    // if (index === quiz.length - 1) {
    //   dispatch(moduleStatusHandler(route.params.id));
    // }

    let interv = setInterval(() => {
      // console.log(quizz[index]);

      if (index === codeQuiz.length - 1) {
        navigation.goBack();
      }
      setIndex(index + 1);
      setCurIndex(curIndex + 1);
    }, quizz[index] * 1000);

    return () => clearInterval(interv);
  }, [index]);
  const Problem = () => {
    return (
      <View
        style={{ backgroundColor: theme ? lightBg.primary : darkBg.primary }}
      >
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
              {`${index + 1}/${codeQuiz.length}`}
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
              {time}
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
              {level}
            </Text>
          </View>
        </View>
        <View style={styles.problDescription}>
          <Header size={18} color={theme ? text.dark : text.light}>
            <View style={styles.problem}>
              <Header
                color={theme ? text.dark : text.light}
                size={16}
                style={styles.heading}
              >
                Problem:
              </Header>
              <View
                style={[
                  styles.box,
                  {
                    backgroundColor: theme
                      ? lightBg.secondary
                      : darkBg.secondary,
                  },
                ]}
              >
                <Paragraph
                  color={theme ? text.dark : text.light}
                  size={14}
                  style={styles.discripton}
                >
                  {descript}
                </Paragraph>
              </View>
            </View>
          </Header>
        </View>
      </View>
    );
  };
  const ProblemCode = () => {
    const [index, setIndex] = useState([]);
    const [code, setCode] = useState("");
    const [textValue, setTextValue] = useState("");
    const { codeResult } = useSelector((state) => state.code);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [codeResults, setCodeResult] = useState([]);

    useEffect(() => {
      console.log(codeQuiz);
      // console.log(choice);
      // console.log(route.params.lesson_id);
      // console.log(route.params.module_id);
      // console.log(route.params.score);
      // console.log(route.params.quiz_id);
      // console.log(currStudent_id);
    });
    useEffect(() => {
      fetch(`${baseUrl}/dist/api/codeData.php`, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          quiz_id: quiz_id,
        }),
      })
        .then((response) => response.text())
        .then((responseJson) => {
          // console.log(responseJson);
          let parse = JSON.parse(responseJson);

          setCodeResult(parse.codeResult);

          // dispatch(updateHandler());
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    const updateLesson = () => {
      fetch(`${baseUrl}/dist/api/updateLesson.php`, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          lesson_id: route.params.lesson_id,
          module_id: route.params.module_id,
          score: score,
          student_id: currStudent_id,
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

    const toggleBottomNavigationView = () => {
      //Toggling the visibility state of the bottom sheet
      setVisible(!visible);
    };
    const numLineHandler = (e) => {
      // console.log((e.nativeEvent.contentSize.height / 20).toFixed()); // prints number of lines
      setIndex(index.concat((e.nativeEvent.contentSize.height / 20).toFixed()));
    };
    const textChange = (e) => {
      setCode(e);
    };
    const sendCode = () => {
      fetch(`${baseUrl}/dist/api/code.php`, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          code: code,
        }),
      })
        .then((response) => response.text())
        .then((responseJson) => {
          // console.log(typeof responseJson);
          let parse = JSON.parse(responseJson);
          // dispatch(codeHandler(parse.code));
          setTextValue(parse.code);
          // console.log(parse);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          // navigation.navigate("Output");
          toggleBottomNavigationView();
        });
    };

    return (
      <ScrollView>
        <View
          style={{ backgroundColor: theme ? lightBg.primary : darkBg.primary }}
        >
          <View style={codeStyle.box}>
            <View style={codeStyle.sideBox}>
              {index.map((val, index) => (
                <Paragraph
                  key={index}
                  color={theme ? text.dark : text.light}
                  size={14}
                  style={codeStyle.sideNumber}
                >
                  {index + 1}
                </Paragraph>
              ))}
            </View>

            <TextInput
              onContentSizeChange={numLineHandler}
              onChangeText={textChange}
              value={code}
              multiline={true}
              style={codeStyle.textInput}
              numberOfLines={12}
            />

            <View
              style={{
                height: 50,
                width: WIDTH,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => toggleBottomNavigationView()}
                style={{ marginLeft: 20 }}
              >
                {/* <Text style={{ color: "green", fontSize: 20 }}>Play</Text> */}
                <Text style={{ color: theme ? text.dark : text.light }}>
                  Show Results
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={sendCode} style={{ marginRight: 20 }}>
                {/* <Text style={{ color: "green", fontSize: 20 }}>Play</Text> */}
                <Play bg={"green"} />
              </TouchableOpacity>
            </View>
          </View>
          <BottomSheet
            visible={visible}
            //setting the visibility state of the bottom shee
            onBackButtonPress={toggleBottomNavigationView}
            //Toggling the visibility state on the click of the back botton
            onBackdropPress={toggleBottomNavigationView}
            //Toggling the visibility state on the clicking out side of the sheet
          >
            <View
              style={{
                flex: 0.5,
                borderRadius: 18,
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: theme ? lightBg.primary : darkBg.primary,
              }}
            >
              <Paragraph
                key={index}
                color={theme ? text.dark : text.light}
                size={18}
                style={codeStyle.sideNumber1}
              >
                Output
              </Paragraph>
              <View style={{ position: "absolute", top: 10, left: 10 }}>
                <Text
                  style={[{ color: "#FF7700", fontSize: 12, paddingTop: 40 }]}
                >
                  {textValue}
                </Text>
              </View>
            </View>
          </BottomSheet>
        </View>
      </ScrollView>
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
        name="ProblemSolving"
        component={ProblemCode}
        options={{ tabBarLabel: "Code" }}
      />
      {/* <Top.Screen
        name="Output"
        component={Output}
        options={{ tabBarLabel: "Output" }}
      /> */}
    </Top.Navigator>
  );
};
const styles = StyleSheet.create({
  problDescription: {
    marginTop: 90,
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
  problem: {
    alignContent: "center",
    alignItems: "center",
    width: WIDTH,
    height: HIEGHT,
  },
  box: {
    zIndex: 99,
    position: "absolute",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
    width: "90%",
    padding: 20,
    // backgroundColor: "#171616",
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
  sideNumber1: {
    textAlign: "center",
    paddingVertical: 10,
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
