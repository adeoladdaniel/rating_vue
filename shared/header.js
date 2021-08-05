import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      {/* <MaterialIcons name="menu" size={28} style={styles.icon} /> */}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
