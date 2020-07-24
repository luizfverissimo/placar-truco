import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as historyActions from '../store/history-actions'

import Colors from "../constants/colors";
import Title from "../components/Title";
import HistoryListItem from "../components/HistoryListItem";

const HistoryScreen = (props) => {
  const dataHistory = useSelector((state) => state.history);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(historyActions.loadScore())
  }, [dispatch, dataHistory])

  const deleteHandler = (id) => {
    Alert.alert('', 'Você deseja excluir esse histórico?', [
      {
        text: "Não",
        style: "default",
      },
      {
        text: "Sim",
        style: "destructive",
        onPress: () => dispatch(historyActions.deleteScore(id))
      }
    ])
  }

  const renderItemFlatList = ({ item }) => {
    return (
      <HistoryListItem
        nameRedTeam={item.nameRedTeam}
        nameBlueTeam={item.nameBlueTeam}
        scoreRedTeam={item.scoreRedTeam}
        scoreBlueTeam={item.scoreBlueTeam}
        winner={item.winner}
        date={item.date}
        onPress={() => deleteHandler(item.id)}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}></View>
      <Title title="HISTÓRICO" />
      <FlatList data={dataHistory.scores} renderItem={renderItemFlatList} style={styles.flatlist} />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.bgColor,
  },
  header: {
    height: 52,
  },
  flatlist: {
    width: '90%',
  }
});
