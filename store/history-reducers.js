import { SET_SCORE, ADD_SCORE, DELETE_SCORE } from "./history-actions";

import HistoryScore from "../models/HistoryScore";

const initialState = {
  scores: [
  ],
};
/* {
  id: "999XX12",
  nameRedTeam: "Equipe Vermelha",
  nameBlueTeam: "Equipe Azul",
  scoreRedTeam: "0",
  scoreBlueTeam: "12",
  winner: "blueTeam",
  date: "01-01-2020 - 12:00",
}, */

/* {
  id: "",
  nameRedTeam: "",
  nameBlueTeam: "",
  scoreRedTeam: "",
  scoreBlueTeam: "",
  winner: "",
  date: "",
}, */

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        scores: action.scores.map((score) => {
          const newScore = new HistoryScore(
            score.id.toString(),
            score.nameRedTeam,
            score.nameBlueTeam,
            score.scoreRedTeam,
            score.scoreBlueTeam,
            score.winner,
            score.date
          );
          return newScore;
        }),
      };

    case ADD_SCORE:
      const newScore = new HistoryScore(
        action.score.id.toString(),
        action.score.nameRedTeam,
        action.score.nameBlueTeam,
        action.score.scoreRedTeam,
        action.score.scoreBlueTeam,
        action.score.winner,
        action.score.date
      );

      return {
        scores: state.scores.concat(newScore),
      };
    
    case DELETE_SCORE:
      return{
        scores: state.scores.filter(score => score.id !== id)
      }

    default:
      return state;
  }
};
