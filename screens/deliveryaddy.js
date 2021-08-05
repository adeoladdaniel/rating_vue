import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Touchable } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";

export default function deliveryaddy({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Select Location")}
      >
        <View style={styles.touchview}>
          <FontAwesome style={styles.location} name="location-arrow" />
          <Text style={styles.text1}>Use current location</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.view2}>
        <EvilIcons style={styles.location2} name="location" />
        <Text style={styles.text2}>Add an address</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 40,
  },
  text1: {
    fontSize: 18,
    position: "absolute",
    top: 20,
    paddingStart: 80,
    //  fontFamily: "Nunito",
  },
  text2: {
    fontSize: 18,
    position: "absolute",
    top: 60,
    paddingStart: 80,
    marginTop: 40,
    //  fontFamily: "Nunito",
    position: "absolute",
  },
  view2: {
    position: "absolute",
    top: 0,
  },
  location: {
    fontSize: 30,
    color: "#E3A40E",
    position: "absolute",
    top: 20,
    paddingStart: 25,
  },

  location2: {
    fontSize: 35,
    color: "#E3A40E",
    position: "absolute",
    top: 98,
    paddingStart: 20,
  },
  touchview: {
    marginTop: 0,
    top: 0,
    paddingTop: 80,
  },
});
