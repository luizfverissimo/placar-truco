import React, {useState} from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import AppNavigator from "./navigation/AppNavigation";

const fetchFonts = () => {
  return Font.loadAsync({
    "openSans": require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  if(!isLoaded) {
    return(
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setIsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return <AppNavigator />;
}
