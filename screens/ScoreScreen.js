import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HeaderScoreScreen from "../components/HeaderScoreScreen";
import Title from "../components/Title";
import Placar from "../components/Placar";

import Colors from "../constants/colors";

const ScoreScreen = (props) => {
  return (
    <View style={styles.screen}>
      <HeaderScoreScreen />
      <Title title="PLACAR" />
      <View style={styles.placarContainer} >
        <Placar />
        <Placar />
      </View>
    </View>
  );
};

export default ScoreScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.bgColor,
  },
  placarContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    
  }
});
