import { fetchScores, insertScore, deleteScoreDb } from "../helpers/db";

export const SET_SCORE = "SET_SCORE";
export const ADD_SCORE = "ADD_SCORE";
export const DELETE_SCORE = "DELETE_SCORE";

export const loadScore = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchScores();
      dispatch({
        type: SET_SCORE,
        scores: dbResult.rows._array,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addScore = (
  nameRedTeam,
  nameBlueTeam,
  scoreRedTeam,
  scoreBlueTeam,
  winner,
  date
) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertScore(
        nameRedTeam,
        nameBlueTeam,
        scoreRedTeam.toString(),
        scoreBlueTeam.toString(),
        winner,
        date
      );

      dispatch({
        type: ADD_SCORE,
        score: {
          id: dbResult.insertId,
          nameRedTeam,
          nameBlueTeam,
          scoreRedTeam,
          scoreBlueTeam,
          winner,
          date,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteScore = (id) => {
  return async (dispatch) => {
    try {
      const dbResult = await deleteScoreDb(id)
      dispatch({
        type: DELETE_SCORE,
        id: id
      })

    } catch (err) {
      console.log(err);
    }
  }
};
