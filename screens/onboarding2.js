import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Touchable, TextInput } from "react-native";
import { useLinkProps } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";
// import { EvilIcons, FontAwesome } from "@expo/vector-icons";

export default function onboarding2({ navigation }) {
  const [selectCity, setSelectCity] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setSelectCity(text)}
        placeholder="Select your City"
        style={styles.input}
      />
      <TextInput
        onChangeText={(text) => setSelectCity(text)}
        placeholder="Select your Area"
        style={styles.input}
      />
      <TextInput
        onChangeText={(text) => setSelectCity(text)}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        onChangeText={(text) => setSelectCity(text)}
        placeholder="Company (Optional)"
        style={styles.input}
      />
      <TextInput
        onChangeText={(text) => setSelectCity(text)}
        placeholder="Address (other) (Optional)"
        style={styles.input}
      />
      <TextInput
        onChangeText={(text) => setSelectCity(text)}
        placeholder="Delivery instructions (optional)"
        style={styles.input}
      />
      <TouchableHighlight onPress={() => navigation.navigate("home")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Save Address</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingStart: 30,
    paddingEnd: 30,
  },

  input: {
    top: 70,
    borderBottomColor: "#E3A40E",
    borderBottomWidth: 2,
    flexDirection: "row",
    padding: 12,
    marginVertical: 20,
    fontSize: 17,
  },
  button: {
    marginTop: 80,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#39B54A",
  },
  buttonText: {
    color: "white",
    textDecorationLine: "none",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
