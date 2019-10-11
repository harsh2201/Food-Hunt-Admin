import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Homescreen from "./Home Screen";
import Login from "./Login";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Homescreen: {
      screen: Homescreen
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
