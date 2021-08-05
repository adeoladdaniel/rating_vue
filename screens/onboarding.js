import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Touchable } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Select Delivery Address")}
      >
        <View style={styles.touchview}>
          <Text style={styles.text}>Set a Delivery Location</Text>
          <Image
            style={styles.shape}
            source={require("../assets/shape.png")}
          ></Image>
        </View>
      </TouchableHighlight>
      <Image
        style={styles.arrow}
        source={require("../assets/arrow.png")}
      ></Image>
      <Text style={styles.text2}>
        Get Started by setting a delivery address
      </Text>
      <Image
        style={styles.delivery}
        source={require("../assets/delivery.png")}
      ></Image>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C1272D",
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontSize: 22,
    color: "#FFFFFF",
    textAlign: "center",
    // position: "absolute",
    top: 70,
    paddingRight: 23,
    //  fontFamily: "Nunito",
  },
  shape: {
    right: 0,
    top: 82,
    position: "absolute",
    height: 10,
    zIndex: 1,
  },
  arrow: {
    position: "absolute",
    top: 150,
    height: 200,
  },
  text2: {
    paddingTop: 250,
    fontSize: 22,
    color: "#FFFFFF",
    textAlign: "center",
    padding: 60,
  },
  delivery: {
    bottom: 30,
    position: "absolute",
    height: 250,
  },
  touchview: {
    position: "relative",
    top: 0,
    paddingBottom: 100,
    backgroundColor: "#C1272D",
  },
});
