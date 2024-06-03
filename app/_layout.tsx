import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();
export default function RootLayout() {
  return (
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
      
  );
}
