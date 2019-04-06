import { combineReducers } from "redux";
import firebase from "./firebase.reducer";

const rootReducer = combineReducers({ firebase });

export default rootReducer;
