import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./landing page";
import Login from "./login";
import Homescreen from "./scraprates";
import WeightOptions from "./weight";
import PickupRequestForm from "./pickupform";
const Stack = createNativeStackNavigator();

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={showLogin ? 'login' : 'LandingPage'}>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="scraprates"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeightOptions"
          component={WeightOptions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PickupRequestForm"
          component={PickupRequestForm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
