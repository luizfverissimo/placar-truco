import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";

import * as scoreAction from "../store/score-actions";

import Colors from "../constants/colors";

const ModalInput = (props) => {
  const [redTeamName, setRedTeamName] = useState("");
  const [blueTeamName, setBlueTeamName] = useState("");

  const dispatch = useDispatch()

  return (
    <View style={styles.modal}>
      <Text style={styles.text}>Selecione os nomes das equipes</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.textRed}>Equipe Vermelha</Text>
        <TextInput
          style={styles.input}
          value={redTeamName}
          onChangeText={setRedTeamName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textBlue}>Equipe Azul</Text>
        <TextInput
          style={styles.input}
          value={blueTeamName}
          onChangeText={setBlueTeamName}
        />
      </View>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          dispatch(scoreAction.newGame(redTeamName, blueTeamName))
          props.onPress();
        }}
      >
        <Text style={styles.textButton}>NOVO JOGO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalInput;

const styles = StyleSheet.create({
  modal: {
    margin: 10,
    alignItems: "center",
  },
  text: {
    fontFamily: "openSans",
    fontSize: 18,
  },
  inputContainer: {
    marginVertical: 20,
    width: "60%",
    alignItems: "center",
  },
  textRed: {
    fontFamily: "openSans",
    fontSize: 18,
    color: Colors.colorRed,
  },
  textBlue: {
    fontFamily: "openSans",
    fontSize: 18,
    color: Colors.colorBlue,
  },
  input: {
    borderBottomColor: Colors.colorGrey,
    borderBottomWidth: 1,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontFamily: "openSans",
    fontSize: 14,
    textAlign: "center",
  },
  touchable: {
    width: "60%",
    backgroundColor: Colors.bgColor,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 5,
  },
  button: {
    width: "60%",
    backgroundColor: Colors.bgColor,
  },
  textButton: {
    fontFamily: "openSans",
    fontSize: 18,
    color: Colors.colorWhite,
  },
});
