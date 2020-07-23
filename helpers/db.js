import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('history.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY NOT NULL, nameRedTeam TEXT, nameBlueTeam TEXT, scoreRedTeam TEXT, scoreBlueTeam TEXT, winner TEXT, date TEXT);",
        [],
        () => {
          //success function
          resolve();
        },
        (_, err) => {
          //error function
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchScores = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM history`,
        [],
        (_, result) => {
          //success function
          resolve(result); 
        },
        (_, err) => {
          //error function
          reject(err);
        }
      );
    });
  });
  return promise;
}

export const insertScore = (nameRedTeam, nameBlueTeam, scoreRedTeam, scoreBlueTeam, winner, date) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO history (nameRedTeam, nameBlueTeam, scoreRedTeam, scoreBlueTeam, winner, date) VALUES (?, ?, ?, ?, ?, ?)`,
        [nameRedTeam, nameBlueTeam, scoreRedTeam, scoreBlueTeam, winner, date],
        (_, result) => {
          //success function
          resolve(result); 
        },
        (_, err) => {
          //error function
          reject(err);
        }
      );
    });
  });
  return promise;
}

export const deleteScoreDb = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM history WHERE id = ?;", 
        [id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      );
    });
  })
  return promise  
} 