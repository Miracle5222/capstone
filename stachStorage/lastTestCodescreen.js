import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    TextInput,
  } from "react-native";
  import React, { useLayoutEffect, useState, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { Moon, Play, Sun } from "../src/icons/Icons";
  import { Container, Header, Paragraph } from "../src/styled/Container.style";
  import { BottomSheet } from "react-native-btr";
  
  const { width, height } = Dimensions.get("screen");
  
  const WIDTH = width;
  const HIEGHT = height;
  
  const CodeScreen = ({ navigation, route }) => {
    const { fontSize } = useSelector((state) => state.content);
    const { darkBg, lightBg, text, theme, icon, quizColor, buttons } =
      useSelector((state) => state.color);
    const [descript, setDescription] = useState("");
    const [level, setLevel] = useState("");
    const [index, setIndexs] = useState(0);
    const [questions_id, setQuestions] = useState("");
    const { baseUrl, multipleQuiz, codeQuiz, choice } = useSelector(
      (state) => state.module
    );
    const { score, quiz_id } = useSelector((state) => state.quiz);
    //code
    const [code, setCode] = useState("");
    const [textValue, setTextValue] = useState("");
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [correct, setCorrect] = useState("");
  
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
  
    useEffect(() => {
      setDescription(codeQuiz[index].description);
      setLevel(codeQuiz[index].difficulty_level);
  
      setQuestions(codeQuiz[index].question_id);
      // if (index === quiz.length - 1) {
      //   dispatch(moduleStatusHandler(route.params.id));
      // }
  
      let interv = setInterval(() => {
        // console.log(quizz[index]);
  
        if (index === codeQuiz.length - 1) {
          navigation.goBack();
        }
        setIndexs(index + 1);
        // setCurIndex(curIndex + 1);
      }, 100000);
  
      return () => clearInterval(interv);
    }, [index]);
  
    //--------------------------------------------code----------------------------------------------------
    const toggleBottomNavigationView = () => {
      //Toggling the visibility state of the bottom sheet
      setVisible(!visible);
    };
    const updateLesson = () => {
      // console.log(route.params.lesson_id);
      // console.log(route.params.module_id);
      // console.log(score);
      // console.log(currStudent_id);
      // console.log(quiz_id);
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
          console.log(responseJson);
          dispatch(updateHandler());
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const textChange = (e) => {
      setCode(e);
    };
    setQuestions(codeQuiz[index].question_id);
  
    useEffect(() => {
      // console.log(codeQuiz);
      const res = choice
        .filter((val) => {
          return val.question_id == questions_id;
        })
        .map((value) => {
          return value;
        });
      setCorrect(res[0].choice_description); //get the correct answer of the current index
    }, []);
  
    const Test = () => {
      fetch(`${baseUrl}api/code.php`, {
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
    const sendCode = () => {
      fetch(`${baseUrl}api/code.php`, {
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
          if (parse.code === correct) {
            dispatch(scoreHandler()); //add 1 to the main score if the answer is correct
  
            // console.log(parse.code === correct);
          } else {
            // console.log(parse.code);
            // console.log("Wrong");
          }
          // if (parse.code === correct) {
          //   dispatch(scoreHandler());
          // }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          // navigation.navigate("Output");
          toggleBottomNavigationView();
          if (index === codeQuiz.length - 1) {
            setTimeout(() => {
              updateLesson(); //update into result_tbl then go back to the main quiz screen
              navigation.goBack();
            }, 3000); //timeout for 3 seconds before the use the goBack() function
          } else {
            setTimeout(() => {
              setIndexs(index + 1); //timeout for 3 seconds before we change the current questions description
            }, 3000);
          }
        });
    };
    return (
      <View
        style={{
          backgroundColor: theme ? lightBg.primary : darkBg.primary,
          flex: 1,
        }}
      >
        <View style={styles.headers}>
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
        <View style={styles.code}>
          <ScrollView>
            <View style={codeStyle.box}>
              <TextInput
                onChangeText={textChange}
                value={code}
                multiline={true}
                style={[
                  codeStyle.textInput,
                  {
                    backgroundColor: theme
                      ? quizColor.lightPrimary
                      : quizColor.darkPrimary,
                  },
                ]}
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
                <View style={{ marginRight: 20, flexDirection: "row" }}>
                  <TouchableOpacity onPress={Test}>
                    {/* <Text style={{ color: "green", fontSize: 20 }}>Play</Text> */}
                    <Text
                      style={{
                        color: theme ? text.dark : text.light,
                        fontSize: fontSize + 2,
                        paddingRight: 20,
                      }}
                    >
                      Run Test
                      {/* {correct} */}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={sendCode}>
                    {/* <Text style={{ color: "green", fontSize: 20 }}>Play</Text> */}
  
                    <Play bg={"green"} />
                  </TouchableOpacity>
                </View>
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
          </ScrollView>
        </View>
      </View>
    );
  };
  
  export default CodeScreen;
  
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
      textAlign: "left",
    },
    headers: {
      flex: 0.35,
    },
    code: { flex: 0.75, backgroundColor: "lightblue" },
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
  