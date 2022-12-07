import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Header, Paragraph } from "../src/styled/Container.style";
import { changeColor } from "../redux/feature/ColorReducer";
import { Moon, Sun } from "../src/icons/Icons";
import { ProgressChart } from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  emailLogin,
  passwordLogin,
  student_idLogin,
  usernameLogin,
} from "../redux/feature/loginReducer";
import { progressBar } from "../redux/feature/dataReducer";
import { fonts } from "@rneui/base";

const { width, height } = Dimensions.get("screen");

const WIDTH = width;
const HEIGHT = height;

const ProfileScreen = ({ navigation }) => {
  const { darkBg, lightBg, text, theme, icon, quizColor } = useSelector(
    (state) => state.color
  );
  const { lock, unlock, length, done } = useSelector((state) => state.module);
  const { fontSize } = useSelector((state) => state.content);
  const { currStudent_id, student_id, username, email } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();
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
      title: "Profile",
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

  const data = {
    labels: ["Done", "Unlock", "Lock"], // optional
    data: [0.4, 0.6, 0.8],
  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  useEffect(() => {
    // console.log("Done.", done.toFixed());
    // console.log("length.", length.toFixed());
    // console.log("unlock.", unlock.toFixed());
    // console.log("lock.", lock.toFixed());
  }, []);

  const removeValue = async () => {
    dispatch(emailLogin(""));

    dispatch(usernameLogin(""));
    dispatch(student_idLogin(""));
    dispatch(progressBar(0));
    navigation.replace("LoginScreen");
    // console.log("Done.");
  };
  return (
    <Container
      style={[
        {
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        },
      ]}
      bg={theme ? lightBg.primary : darkBg.primary}
    >
      <View
        style={[
          styles.profileContainer,
          {
            backgroundColor: theme
              ? quizColor.lightPrimary
              : quizColor.darkPrimary,
          },
        ]}
      >
        <View style={styles.profile}>
          <View style={styles.profileSection}>
            <Text
              style={[
                {
                  color: text.light,
                  fontSize: fontSize,
                },
              ]}
            >
              Student ID : {student_id}
            </Text>
            <Text
              style={[
                {
                  color: text.light,
                  fontSize: fontSize,
                },
              ]}
            >
              Username : {username}
            </Text>
            <Text
              style={[
                {
                  color: text.light,
                  fontSize: fontSize,
                },
              ]}
            >
              Email : {email}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.changePassword}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text
                style={[
                  {
                    color: text.light,
                    fontSize: fontSize,
                  },
                ]}
              >
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={removeValue}>
            <Text
              style={[
                {
                  color: text.light,
                  fontSize: fontSize,
                },
              ]}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          padding: 10,
          width: "90%",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme
            ? quizColor.lightPrimary
            : quizColor.darkPrimary,
        }}
      >
        <Text
          style={{
            color: text.light,
            textAlign: "center",
            paddingVertical: 10,
            fontSize: fontSize,
          }}
        >
          Lesson Status
        </Text>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "space-around",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#084844",
              padding: 12,
              color: text.light,
              marginVertical: 4,
            }}
          >
            <Text
              style={{
                color: text.light,
              }}
            >
              Unlock: {unlock.toFixed()}/{length.toFixed()}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#753A03",
              padding: 12,
              color: text.light,
              marginVertical: 4,
            }}
          >
            <Text
              style={{
                color: text.light,
              }}
            >
              Lock: {lock.toFixed()}/{length.toFixed()}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#BD6600",
              padding: 12,
              color: text.light,
              marginVertical: 4,
            }}
          >
            <Text
              style={{
                color: text.light,
              }}
            >
              Done : {done.toFixed()}/{length.toFixed()}
            </Text>
          </View>
        </View>

        {/* <ProgressChart
          data={data}
          width={WIDTH}
          height={220}
          strokeWidth={10}
          radius={15}
          chartConfig={chartConfig}
          hideLegend={false}
        /> */}
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  profileContainer: {
    borderRadius: 8,
    padding: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 0.3,
    width: "90%",
    backgroundColor: "gray",
  },
  profileSection: {
    alignItems: "flex-start",
  },
  profile: {
    justifyContent: "space-between",
  },
  changePassword: {
    justifyContent: "center",
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 6,
    backgroundColor: "red",
  },
});
export default ProfileScreen;
