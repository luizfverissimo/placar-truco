import React, { useRef } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as scoreAction from "../store/score-actions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PlacarButtonsBlue from "./PlacarButtonsBlue";

import Colors from "../constants/colors";

const ScoreRight = (props) => {
  const data = useSelector((state) => state.score);
  const dispatch = useDispatch();
  const flatlist = useRef(null);

  const renderItemFlatList = ({ item }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.placarText}>{item.blueTeam}</Text>
      </View>
    );
  };

  const scoreHandler = (value) => {
    if (data.score.length === 0 || data.winner) {
      Alert.alert("", "Clique em novo jogo para iniciar.");
      return;
    }

    dispatch(scoreAction.score(value, "blueTeam"));
  };

  const WinnerIcon = () => {
    let icon
    if (data.winner === "redTeam"){
      icon = (
        <MaterialCommunityIcons
          name="close-circle-outline"
          size={52}
          color={Colors.colorRed}
        />
      )
    }
    if (data.winner === "blueTeam") {
      icon = (
        <MaterialCommunityIcons
          name="crown"
          size={52}
          color={Colors.colorYellow}
        />
      )
    }

    if (!data.winner) {
      icon = <View style={{height: 52}} ></View>
    }

    return icon
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.nameBlueTeam}</Text>
      <FlatList
        data={data.score}
        renderItem={renderItemFlatList}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        ref={flatlist}
        onContentSizeChange={() => flatlist.current.scrollToEnd()}
      />
      <WinnerIcon />
      <PlacarButtonsBlue value="+1" onPress={() => scoreHandler(1)} />
      <PlacarButtonsBlue value="+3" onPress={() => scoreHandler(3)} />
      <PlacarButtonsBlue value="-1" onPress={() => scoreHandler(-1)} />
    </View>
  );
};

export default ScoreRight;

const styles = StyleSheet.create({
  container: {
    borderLeftColor: Colors.colorWhite,
    borderLeftWidth: 1,
    alignItems: "center",
    width: "50%",
    marginBottom: 5,
  },
  placarText: {
    fontFamily: "openSans",
    fontSize: 36,
    color: Colors.colorWhite,
  },
  text: {
    fontFamily: "openSans",
    fontSize: 16,
    color: Colors.colorBlue,
  },
});
