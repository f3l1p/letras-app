import { fetchLyrics, insertLyric, updateLyric } from "../db";

export const ADD_LYRIC = "ADD_LYRIC";
export const DELETE_LYRIC = "DELETE_LYRIC";
export const LOAD_LYRICS = "LOAD_LYRICS";
export const UPDATE_LYRICS = "UPDATE_LYRICS";

export const addLyric = (title, lyric) => {
	return async (dispatch) => {
		try {
			const result = await insertLyric(title, lyric);
			dispatch({
				type: ADD_LYRIC,
				payload: { title, lyric },
			});
		} catch (err) {
			console.log(err.message);
		}
	};
};

export function deletelyric(id) {
	return {
		type: DELETE_LYRIC,
		payload: id,
	};
}

export const loadLyrics = () => {
	return async (dispatch) => {
		try {
			const result = await fetchLyrics();
			console.log(result.rows._array);

			dispatch({
				type: LOAD_LYRICS,
				lyrics: result.rows._array,
			});
		} catch (err) {
			throw err;
		}
	};
};

export const updateLyricAction = (title, lyric) => {
	return async (dispatch) => {
		try {
			const result = await updateLyric();
			dispatch({
				type: UPDATE_LYRICS,
				payload: { title, lyric },
			});
		} catch (err) {
			throw err;
		}
	};
};

//Reducers

const initialState = { lyrics: [] };

function lyricsReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_LYRIC:
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
		case DELETE_LYRIC:
			const deleteNewArray = remove(state, (obj) => {
				return obj.id != action.payload;
			});
			return deleteNewArray;

		case LOAD_LYRICS:
			return {
				...state,
				lyrics: action.lyrics,
			};
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
