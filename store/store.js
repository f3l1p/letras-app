import { createStore, applyMiddleware } from "redux";
import lyricsReducer from "./reducers";
import * as thunk from "redux-thunk";

const store = createStore(lyricsReducer, applyMiddleware(thunk.default));

export default store;
