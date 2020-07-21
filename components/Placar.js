import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import PlacarButtons from "../components/PlacarButtons";

import Colors from "../constants/colors";

const data = [
  { id: 1, redTeam: 0, blueTeam: 0 },
  { id: 2, redTeam: 0, blueTeam: 1 },
  { id: 3, redTeam: 3, blueTeam: 1 },
  { id: 4, redTeam: 3, blueTeam: 4 },
  { id: 5, redTeam: 9, blueTeam: 4 },
  { id: 6, redTeam: 12, blueTeam: 4 },
  { id: 7, redTeam: 12, blueTeam: 4 },
  { id: 8, redTeam: 12, blueTeam: 4 },
  { id: 9, redTeam: 12, blueTeam: 4 },
];

const Placar = (props) => {
  const renderItemFlatList = ({ item }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.placarText}>{item.redTeam}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>João e Mário</Text>
      <FlatList
        data={data}
        renderItem={renderItemFlatList}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
      <PlacarButtons value="+1" />
      <PlacarButtons value="+3" />
      <PlacarButtons value="-1" />
    </View>
  );
};

export default Placar;

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
