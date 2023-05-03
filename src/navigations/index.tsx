import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticatedStack from "./StackNavigator/AuthenticatedStack";

const Navigations = () => {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
};

export default Navigations;
