import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking  } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/colors";

const InfoModal = (props) => {
  return (
    <View style={styles.modal}>
      <Text style={styles.text}>Informações</Text>
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Text style={styles.textButton}>AVALIE ESTE APP</Text>
        <View style={styles.starsContainer}>
          <MaterialCommunityIcons
            name="star"
            size={18}
            color={Colors.colorWhite}
          />
          <MaterialCommunityIcons
            name="star"
            size={18}
            color={Colors.colorWhite}
          />
          <MaterialCommunityIcons
            name="star"
            size={18}
            color={Colors.colorWhite}
          />
          <MaterialCommunityIcons
            name="star"
            size={18}
            color={Colors.colorWhite}
          />
          <MaterialCommunityIcons
            name="star"
            size={18}
            color={Colors.colorWhite}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Versão</Text>
      <Text style={styles.textSmall}>1.0.0</Text>
      <Text style={styles.text}>Autor</Text>
      <Text style={styles.textSmall}>luizfverissimo</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/luizfverissimo')} >
        <MaterialCommunityIcons
          name="github-box"
          size={32}
          color={Colors.bgColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    marginVertical: 20,
  },
  touchable: {
    width: "60%",
    backgroundColor: Colors.bgColor,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 5,
    marginVertical: 5,
  },
  textButton: {
    fontFamily: "openSans",
    fontSize: 18,
    color: Colors.colorWhite,
  },
  text: {
    fontFamily: "openSans",
    fontSize: 16,
    color: Colors.bgColor,
  },
  textSmall: {
    fontFamily: "openSans",
    fontSize: 14,
    color: Colors.colorGrey,
  },
  starsContainer: {
    flexDirection: "row",
  },
});
