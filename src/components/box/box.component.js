import React from "react";
import { View, StyleSheet } from "react-native";

const ColorBox = ({ color }) => {
  return (
    <View style={[boxStyles.customBox, { backgroundColor: color }]}></View>
  );
};

export default ColorBox;

const boxStyles = StyleSheet.create({
  customBox: {
    borderColor: "#000",
    borderWidth: 3,
    height: 45,
    width: 150,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    marginTop: 15,
  },
});