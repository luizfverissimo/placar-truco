import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

const PlacarButtonsBlue = (props) => {
  return (
    <TouchableOpacity style={{width: '100%', alignItems: 'center'}} onPress={props.onPress}>
      <View style={{ ...styles.buttonContainer, ...props.style }}>
        <Text style={styles.text}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlacarButtonsBlue;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.colorBlue,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    paddingVertical: 8,
    marginVertical: 5,
  },
  text: {
    fontFamily: "openSans",
    fontSize: 18,
    color: Colors.colorWhite,
  },
});
