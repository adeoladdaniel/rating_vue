import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Touchable, TextInput } from "react-native";
import { useLinkProps } from "@react-navigation/native";
import header from "../shared/header";
// import { EvilIcons, FontAwesome } from "@expo/vector-icons";

export default function home({ navigation }) {
  const [selectCity, setSelectCity] = useState("");

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({});
