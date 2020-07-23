import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Modalize } from "react-native-modalize";
import { useSelector, useDispatch } from "react-redux";
import * as historyActions from "../store/history-actions";
import moment from 'moment'

import HeaderScoreScreen from "../components/HeaderScoreScreen";
import Title from "../components/Title";
import ScoreLeft from "../components/ScoreLeft";
import ScoreRight from "../components/ScoreRight";
import ModalInput from "../components/ModalInput";

import Colors from "../constants/colors";

const ScoreScreen = (props) => {
  const data = useSelector((state) => state.score);
  const dispatch = useDispatch()
  const modalizeRef = useRef(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const closeModal = () => {
    modalizeRef.current?.close();
  };

  useEffect(() => {
    if (data.winner) {
      const dataRaw = new Date()
      const dataFormat = moment(dataRaw).format('DD-MM-YYYY - HH:mm')

      const scoreRedTeam = data.score[data.score.length - 1].redTeam
      const scoreBlueTeam = data.score[data.score.length - 1].blueTeam


      dispatch(historyActions.addScore(data.nameRedTeam, data.nameBlueTeam, scoreRedTeam, scoreBlueTeam, data.winner, dataFormat ))
    }
    if(!data.winner) {
      return
    }
  }, [data.winner]);

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
