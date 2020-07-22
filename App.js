import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import scoreReducer from './store/score-reducers'

import AppNavigator from "./navigation/AppNavigation";
import Colors from './constants/colors'

const fetchFonts = () => {
  return Font.loadAsync({
    openSans: require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const rootReducer = combineReducers({
  score: scoreReducer
})
const store = createStore(rootReducer)

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
    <Provider store={store} >
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={Colors.bgColor}
        />
      <AppNavigator />
    </SafeAreaView>
    </Provider>
  );
}
