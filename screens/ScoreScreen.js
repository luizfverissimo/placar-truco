import React, { useRef } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Modalize } from "react-native-modalize";

import HeaderScoreScreen from "../components/HeaderScoreScreen";
import Title from "../components/Title";
import ScoreLeft from "../components/ScoreLeft";
import ScoreRight from "../components/ScoreRight";
import ModalInput from "../components/ModalInput";

import Colors from "../constants/colors";

const ScoreScreen = (props) => {
  const modalizeRef = useRef(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const closeModal = () => {
    modalizeRef.current?.close();
  };

  return (
    <>
      <View style={styles.screen}>
        <HeaderScoreScreen onPressNewGame={openModal} />
        <Title title="PLACAR" />
        <View style={styles.placarContainer}>
          <ScoreLeft />
          <ScoreRight />
        </View>
      </View>

      <Modalize ref={modalizeRef} adjustToContentHeight={true}>
        <ModalInput
          onPress={() => {
            closeModal();
          }}
        />
      </Modalize>
    </>
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
    flexDirection: "row",
    flex: 1,
    width: "100%",
  },
});
