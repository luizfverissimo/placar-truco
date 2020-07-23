import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'

import { init } from './helpers/db'

import scoreReducer from './store/score-reducers'
import historyReducer from './store/history-reducers'

import AppNavigator from "./navigation/AppNavigation";
import Colors from './constants/colors'

init()
  .then(() => console.log("initialized DB"))
  .catch((err) => console.log("initialized Fail", err));

const fetchFonts = () => {
  return Font.loadAsync({
    openSans: require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const rootReducer = combineReducers({
  score: scoreReducer,
  history: historyReducer
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

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
