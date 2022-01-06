import {
	fetchLyricsDb,
	insertLyricDb,
	updateLyricDb,
	deleteLyricDb,
} from "../db";

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
		} catch (err) {
			throw err;
		}
	};
};

export function deletelyricAction(id) {
	console.log(id, " action id for delete");
	return async (dispatch) => {
		try {
			const result = await deleteLyricDb(id);
			dispatch({
				type: DELETE_LYRIC,
				payload: id,
			});
		} catch (err) {
			console.log(err.message);
		}
	};
}

//Reducers

const initialState = { lyrics: [] };

console.log(initialState.lyrics, "initial state");

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
			const deleteNewArray = initialState.lyrics.filter((item) => {
				item.id != action.payload.id;
			});
			console.log(deleteNewArray, "delete new array");
			return deleteNewArray;

			break;

		case LOAD_LYRICS:
			return {
				...state,
				lyrics: action.lyrics,
			};
			break;
		case UPDATE_LYRICS:
			return {
				...state,
				lyrics: [
					...state.lyrics,
					{
						title: action.payload.title,
						lyric: action.payload.lyric,
					},
				],
			};
		default:
			return state;
	}
}

export default lyricsReducer;
