import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/colors";

const HistoryListItem = (props) => {
  let showBlue = false;
  let showRed = false;

  if (props.winner === "redTeam") {
    showRed = true;
  } else if (props.winner === "blueTeam") {
    showBlue = true;
  }

  return (
    <View style={styles.listItem}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={props.onPress}>
          <MaterialCommunityIcons
            name="close"
            size={18}
            color={Colors.colorGrey}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.teamRed}>
          <Text style={styles.textTeamRed}>{props.nameRedTeam}</Text>
          <View style={styles.scoreContainer}>
            {showRed && (
              <MaterialCommunityIcons
                name="crown"
                size={52}
                color={Colors.colorYellow}
              />
            )}
            <Text style={styles.score}>{props.scoreRedTeam}</Text>
          </View>
        </View>
        <View style={styles.teamBlue}>
          <Text style={styles.textTeamBlue}>{props.nameBlueTeam}</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>{props.scoreBlueTeam}</Text>
            {showBlue && (
              <MaterialCommunityIcons
                name="crown"
                size={52}
                color={Colors.colorYellow}
              />
            )}
          </View>
        </View>
      </View>
      <Text style={styles.date}>{props.date}</Text>
    </View>
  );
};

export default HistoryListItem;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    borderBottomColor: Colors.colorGrey,
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  buttonContainer: {
    alignSelf: 'flex-end'
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textTeamRed: {
    fontFamily: "openSans",
    fontSize: 16,
    color: Colors.colorRed,
    textAlign: "center",
  },
  textTeamBlue: {
    fontFamily: "openSans",
    fontSize: 16,
    color: Colors.colorBlue,
    textAlign: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  score: {
    fontFamily: "openSans",
    fontSize: 36,
    color: Colors.colorWhite,
    textAlign: "center",
  },
  date: {
    fontFamily: "openSans",
    fontSize: 12,
    color: Colors.colorGrey,
    textAlign: "center",
  },
});
