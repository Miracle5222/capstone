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
  const [value, setValue] = useState(0);
  const { data, result } = useSelector((state) => state.module);
  const dispatch = useDispatch();
  let t = 0;
  let f = 0;
  let sum = 0;
  let r = 0;

  useEffect(() => {
    data.map((val) => {
      val.modules.map((value) => {
        value.topic.map((vals) => {
          sum += 1;
          vals.status === "done" ? (t += 1) : (f += 1);
        });
      });
    });
    r = ((t * 100) / sum).toFixed();

    dispatch(progressBar(r));
  }, [result, data]);

  return (
    <>
      <CircularProgress
        radius={50}
        value={result}
        textColor="#0091B5"
        fontSize={14}
        valueSuffix={"%"}
        activeStrokeColor={"#0091B5"}
        inActiveStrokeColor={"#0091B5"}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={800}
        onAnimationComplete={() => setValue(50)}
      />
    </>
  );
};

export default Progressbar;

const styles = StyleSheet.create({});
