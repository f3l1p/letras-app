import {
	fetchLyricsDb,
	insertLyricDb,
	updateLyricDb,
	deleteLyricDb,
} from "../db";

import { Alert } from "react-native";

export const ADD_LYRIC = "ADD_LYRIC";
export const DELETE_LYRIC = "DELETE_LYRIC";
export const LOAD_LYRICS = "LOAD_LYRICS";
export const UPDATE_LYRICS = "UPDATE_LYRICS";

export const addLyric = (id, title, lyric) => {
	return async (dispatch) => {
		try {
			const result = await insertLyricDb(id, title, lyric);
			dispatch({
				type: ADD_LYRIC,
				payload: { id, title, lyric },
			});
		} catch (err) {
			console.log(err.message);
		}
	};
};

export const loadLyrics = () => {
	return async (dispatch) => {
		try {
			const result = await fetchLyricsDb();

			dispatch({
				type: LOAD_LYRICS,
				lyrics: result.rows._array,
			});
		} catch (err) {
			throw err;
		}
	};
};

export const updateLyricAction = (id, title, lyric) => {
	return async (dispatch) => {
		try {
			const result = await updateLyricDb(id, title, lyric);
			dispatch({
				type: UPDATE_LYRICS,
				payload: { id, title, lyric },
			});
			Alert.alert("OK", "La cancion se actualizo exitosamente");
		} catch (err) {
			console.log(err);
			Alert.alert("Error", "no se pudo actualizar.");
			throw err;
		}
	};
};

export function deletelyricAction(id) {
	return async (dispatch) => {
		try {
			const result = await deleteLyricDb(id);
			dispatch({
				type: DELETE_LYRIC,
				payload: id,
			});
			Alert.alert("OK", "La cancion se borro exitosamente");
		} catch (err) {
			console.log(err.message);
			Alert.alert("Error", "No se pudo borrar.");
		}
	};
}

//Reducers

const initialState = { lyrics: [] };

function lyricsReducer(state = initialState.lyrics, action) {
	console.log(state, "state");
	switch (action.type) {
		case ADD_LYRIC:
			return {
				...state,

				lyrics: [
					...state.lyrics,
					{
						id: action.payload.id,
						title: action.payload.title,
						lyric: action.payload.lyric,
					},
				],
			};
			break;
		case DELETE_LYRIC:
			const deleteNewArray = state.lyrics.filter(
				(item) => item.id !== action.payload
			);
			console.log(deleteNewArray, "delete new array");
			return {
				...state,
				lyrics: deleteNewArray,
			};

			break;

		case LOAD_LYRICS:
			return {
				...state,
				lyrics: action.lyrics,
			};
			break;
		case UPDATE_LYRICS:
			const updateLyrics = state.lyrics.map((lyric) => {
				if (lyric.id === action.payload.id) {
					return {
						id: action.payload.id,
						title: action.payload.title,
						lyric: action.payload.lyric,
					};
				} else {
					return lyric;
				}
			});
			return {
				...state,
				lyrics: updateLyrics,
			};
		default:
			return state;
	}
}

export default lyricsReducer;
