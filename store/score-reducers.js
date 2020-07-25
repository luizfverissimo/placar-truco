import Score from "../models/Score";
import { NEW_GAME, SCORE } from "./score-actions";
import nextId from "react-id-generator";

const initialState = {
  nameRedTeam: "Equipe Vermelha",
  nameBlueTeam: "Equipe Azul",
  winner: null,
  score: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        nameRedTeam: action.nameRedTeam ? action.nameRedTeam : "Equipe Vermelha",
        nameBlueTeam: action.nameBlueTeam ? action.nameBlueTeam : "Equipe Azul",
        winner: null,
        score: [{ id: "1", redTeam: 0, blueTeam: 0 }],
      };

    case SCORE:
      const lastScore = state.score.length - 1
      let newScore = state.score[lastScore]

      const newId = nextId()
      if (action.team === "blueTeam") {
        newScore = { ...newScore, id: newId, blueTeam: newScore.blueTeam + action.value };
      } else {
        newScore = { ...newScore, id: newId, redTeam: newScore.redTeam + action.value};
      }

      if (newScore.redTeam < 0) {
        newScore.redTeam = 0
      } else if (newScore.blueTeam < 0) {
        newScore.blueTeam = 0
      }

      let newWinner = null
      if (newScore.redTeam >= 12) {
        newWinner = 'redTeam'
      } else if (newScore.blueTeam >= 12) {
        newWinner = 'blueTeam'
      }

      return {
        ...state,
        score: state.score.concat(newScore),
        winner: newWinner
      };

    default:
      return state;
  }
};
