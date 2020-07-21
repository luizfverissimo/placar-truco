import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

const PlacarButtons = (props) => {
  return (
    <TouchableOpacity style={{width: '100%', alignItems: 'center'}} >
      <View style={{ ...styles.buttonContainer, ...props.style }}>
        <Text style={styles.text}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlacarButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.colorRed,
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
