import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export const ButonIndicator = ({ content, event }) => {
  const { darkBg, lightBg, text, theme, buttons } = useSelector(
    (state) => state.color
  );

  return (
    <View style={styles.circleContainer}>
      {content.map((_, index) => {
        return (
          <TouchableOpacity key={index} activeOpacity={0.8} onPress={event}>
            <View
              style={[styles.circle, { backgroundColor: buttons.light }]}
            ></View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    zIndex: 99,
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 30,

    width: "90%",
  },
  circle: {
    marginHorizontal: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
