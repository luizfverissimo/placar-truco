import React, { useRef } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as scoreAction from "../store/score-actions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PlacarButtonsRed from "./PlacarButtonsRed";

import Colors from "../constants/colors";

const ScoreLeft = (props) => {
  const data = useSelector((state) => state.score);
  const flatlist = useRef(null);

  const dispatch = useDispatch();

  const renderItemFlatList = ({ item }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.placarText}>{item.redTeam}</Text>
      </View>
    );
  };

  const scoreHandler = (value) => {
    if (data.score.length === 0 || data.winner) {
      Alert.alert("", "Clique em NOVO JOGO para iniciar.");
      return;
    }

    dispatch(scoreAction.score(value, "redTeam"));
  };

  const WinnerIcon = () => {
    let icon
    if (data.winner === "blueTeam"){
      icon = (
        <MaterialCommunityIcons
          name="close-circle-outline"
          size={52}
          color={Colors.colorRed}
        />
      )
    }
    if (data.winner === "redTeam") {
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
      <Text style={styles.text}>{data.nameRedTeam}</Text>
      <FlatList
        data={data.score}
        renderItem={renderItemFlatList}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        ref={flatlist}
        onContentSizeChange={() => flatlist.current.scrollToEnd()}
      />
      <WinnerIcon />
      <PlacarButtonsRed value="+1" onPress={() => scoreHandler(1)} />
      <PlacarButtonsRed value="+3" onPress={() => scoreHandler(3)} />
      <PlacarButtonsRed value="-1" onPress={() => scoreHandler(-1)} />
    </View>
  );
};

export default ScoreLeft;

const styles = StyleSheet.create({
  container: {
    borderRightColor: Colors.colorWhite,
    borderRightWidth: 1,
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
    color: Colors.colorRed,
  },
});
