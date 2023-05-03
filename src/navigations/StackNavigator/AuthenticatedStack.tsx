import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../screens/HomeScreen";
import LoginScreen from "../../screens/LoginScreen";

const Stack = createNativeStackNavigator<any>();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
      }}
    >
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Login'} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
