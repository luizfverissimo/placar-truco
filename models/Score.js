class Score {
  constructor(nameRedTeam, nameBlueTeam, winner, score) {
    this.nameRedTeam = nameRedTeam
    this.nameBlueTeam = nameBlueTeam
    this.winner = winner
    this.score = score
    
  }
}

export default Score

/* 
{
  nameRedTeam: João,
  nameBlueTeam: José,
  winner: null
  score: [
    {
      id: 1,
      redTeam: 0, 
      blueTeam: 0
    },
    {
      id: 2,
      redTeam: 0, 
      blueTeam: 1
    },
    ...
  ]
}


*/