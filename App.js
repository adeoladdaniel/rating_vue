import "react-native-gesture-handler";
import { AppLoading, SplashScreen } from "expo";
import { Asset } from "expo-asset";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import onboarding from "./screens/onboarding";
import deliveryaddy from "./screens/deliveryaddy";
import onboarding2 from "./screens/onboarding2";
import home from "./screens/home";
import Header from "./shared/header";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={onboarding}
          options={{
            headerStyle: { backgroundColor: "#C1272D" },
          }}
        />
        <Stack.Screen
          name="Select Delivery Address"
          component={deliveryaddy}
          options={{
            headerStyle: { backgroundColor: "#C1272D" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Select Location"
          component={onboarding2}
          options={{
            headerStyle: { backgroundColor: "#C1272D" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="home"
          component={home}
          options={{
            headerStyle: { backgroundColor: "#C1272D" },
            headerTintColor: "#fff",
            headerTitle: () => <Header />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
