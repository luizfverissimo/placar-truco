import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from '../constants/colors';

const HeaderScoreScreen = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="information"
          size={32}
          color={Colors.colorWhite}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>NOVO JOGO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderScoreScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    width: '100%',
    marginVertical: 10
  },
  text: {
    fontFamily: "openSans",
    fontSize: 16,
    color: Colors.colorWhite
  },
});
