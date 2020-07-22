export const NEW_GAME = "NEW_GAME";
export const SCORE = 'SCORE'

export const newGame = (nameRedTeam, nameBlueTeam) => {
  return {
    type: NEW_GAME,
    nameRedTeam: nameRedTeam,
    nameBlueTeam: nameBlueTeam,
  };
};

export const score = (value, team) => {
  return {
    type: SCORE,
    team: team,
    value: value
  }
}