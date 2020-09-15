/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import ColorBox from "./src/components/box/box.component"
import AppButton from "./src/components/button/button.componnt"

export default function App(){
  const [colorBlack, setColorBlack] = useState("transparent");
  const [colorBlackSwitch, setColorBlackSwitch] = useState(false);
  const [colorRed, setColorRed] = useState("transparent");
  const [colorRedSwitch, setColorRedSwitch] = useState(false);
  const [colorGreen, setColorGreen] = useState("transparent");
  const [colorGreenSwitch, setColorGreenSwitch] = useState(false);
  const [colorOrange, setColorOrange] = useState("transparent");
  const [colorOrangeSwitch, setColorOrangeSwitch] = useState(false);

  const blackButtonClick = (colorBlack) => {
    if (colorBlackSwitch === false) {
      setColorBlack(colorBlack), setColorBlackSwitch(!colorBlackSwitch);
    } else {
      setColorBlack("transparent"), setColorBlackSwitch(!colorBlackSwitch);
    }
  };

  const redButtonClick = (colorRed) => {
    if (colorRedSwitch === false) {
      setColorRed(colorRed), setColorRedSwitch(!colorRedSwitch);
    } else {
      setColorRed("transparent"), setColorRedSwitch(!colorRedSwitch);
    }
  };

  const greenButtonClick = (colorGreen) => {
    if (colorGreenSwitch === false) {
      setColorGreen(colorGreen), setColorGreenSwitch(!colorGreenSwitch);
    } else {
      setColorGreen("transparent"), setColorGreenSwitch(!colorGreenSwitch);
    }
  };

  const orangeButtonClick = (colorOrange) => {
    if (colorOrangeSwitch === false) {
      setColorOrange(colorOrange), setColorOrangeSwitch(!colorOrangeSwitch);
    } else {
      setColorOrange("transparent"), setColorOrangeSwitch(!colorOrangeSwitch);
    }
  };
  return (
    <View style={styles.section}>
      <View style={styles.leftsection}>
        <AppButton title="Black" onPress={() => blackButtonClick("black")}/>
        <AppButton title="Red" onPress={() => redButtonClick("red")}/>
        <AppButton title="Green" onPress={() => greenButtonClick("green")} />
        <AppButton title="Orange" onPress={() => orangeButtonClick("orange")} />
      </View>
      <View style={styles.rightsection}>
        <ColorBox color={colorBlack} />
        <ColorBox color={colorRed} />
        <ColorBox color={colorGreen} />
        <ColorBox color={colorOrange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
section:{
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
},
leftsection:{
  flex: 3,
  flexDirection: "column",
  backgroundColor: "#cceeff",
  height: "100%",
  alignItems: "center",
  justifyContent: "center"
},
rightsection:{
  flex: 3,
  flexDirection: "column",
  height: "100%",
  backgroundColor: "#ffd4f3",
  alignItems: "center",
  justifyContent: "center"
}
});