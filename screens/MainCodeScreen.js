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

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HIEGHT = height;

const MainCodeScreen = ({ navigation }) => {
  const [index, setIndex] = useState([]);
  const [code, setCode] = useState("");
  const [textValue, setTextValue] = useState("");
  const { codeResult } = useSelector((state) => state.code);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  // console.log(codeResult);
  const Top = createMaterialTopTabNavigator();
  const { baseUrl } = useSelector((state) => state.module);

  const { darkBg, lightBg, text, theme, icon } = useSelector(
    (state) => state.color
  );

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
                color={text.light}
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

const styles = StyleSheet.create({
  problem: {
    alignContent: "flex-start",
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
export default MainCodeScreen;
