import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("lyrics.db");

//CREAR LA TABLA
export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS lyrics (
                    id INTEGER PRIMARY KEY AUTOINCREMENT ,
                    title TEXT NOT NULL,
                    lyric TEXT NOT NULL
                    )`,
				[],
				() => {
					resolve();
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};

export const insertLyric = (title, lyric) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`INSERT INTO lyrics ( title, lyric)
				VALUES (?,?)`,
				[title, lyric],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
};

export const fetchLyrics = (id, title, lyric) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`SELECT * FROM lyrics`,
				[],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
};

export const updateLyric = (title, lyric) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"UPDATE lyrics SET title=? lyric=? WHERE id=?",
				[title, lyric, id],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
};
//`UPDATE lyrics SET title=? lyric=? WHERE id=? `,
//`DELETE FROM lyrics`
