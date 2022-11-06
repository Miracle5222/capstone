import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { progressBar } from "../redux/feature/dataReducer";
const screenWidth = Dimensions.get("window").width;

const Progressbar = () => {
  const [length, setLength] = useState(0);
  const [done, setDone] = useState(0);
  const [unlock, setUnLock] = useState(0);
  const [lock, setLock] = useState(0);
  useEffect(() => {
    fetch(
      "https://1769-2001-4455-10c-8a00-f97b-d87-b964-a70b.ap.ngrok.io/startbootstrap-sb-admin/dist/api/progress.php",
      {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);

        let parse = JSON.parse(responseJson);
        setLength(parse.data.length);
        setDone(parse.data.done);
        setUnLock(parse.data.unlock);
        setLock(parse.data.lock);
        // console.log(parse.data[0].sub_lesson);
        // setSubLesson(parse.data[0].sub_lesson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // const [value, setValue] = useState(0);
  // const { data, result } = useSelector((state) => state.module);
  // const dispatch = useDispatch();
  // let t = 0;
  // let f = 0;
  // let sum = 0;
  // let r = 0;

  // useEffect(() => {
  //   data.map((val) => {
  //     val.modules.map((value) => {
  //       value.topic.map((vals) => {
  //         sum += 1;
  //         vals.status === "done" ? (t += 1) : (f += 1);
  //       });
  //     });
  //   });
  //   r = ((t * 100) / sum).toFixed();

  //   dispatch(progressBar(r));
  // }, [result, data]);

  return (
    <>
      <CircularProgress
        radius={50}
        value={(done * 100) / 44}
        textColor="#0091B5"
        fontSize={14}
        valueSuffix={"%"}
        activeStrokeColor={"#0091B5"}
        inActiveStrokeColor={"#0091B5"}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={800}
        // onAnimationComplete={() => setValue(50)}
      />
    </>
  );
};

export default Progressbar;

const styles = StyleSheet.create({});
