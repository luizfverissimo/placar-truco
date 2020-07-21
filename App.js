import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import AppNavigator from "./navigation/AppNavigation";
import Colors from './constants/colors'

const fetchFonts = () => {
  return Font.loadAsync({
    openSans: require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  if (!isLoaded) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setIsLoaded(true)}
          onError={(err) => console.log(err)}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={Colors.bgColor}
        />
      <AppNavigator />
    </SafeAreaView>
  );
}
