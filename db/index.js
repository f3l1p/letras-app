import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("lyrics.db");

//CREAR LA TABLA
export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS lyrics (
					id TEXT NOT NULL,
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

export const insertLyricDb = (id, title, lyric) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`INSERT INTO lyrics (id, title, lyric)
				VALUES (?,?,?)`,
				[id, title, lyric],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
};

export const fetchLyricsDb = () => {
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

export const updateLyricDb = (id, title, lyric) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`UPDATE lyrics SET title=?, lyric=? WHERE id=?`,
				[title, lyric, id],
				(_, result) => {
					console.log(result);
					resolve(result);
				},
				(_, err) => reject(err)
			);
		});
	});
};

export const deleteLyricDb = (id) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`DELETE FROM lyrics WHERE id=?`,
				[id],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
};
