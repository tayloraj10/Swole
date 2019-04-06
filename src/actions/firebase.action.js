import firebase from "firebase";
import {
  INITIALIZE,
  INITIALIZE_SUCCESS,
  INITIALIZE_ERROR,
  REQUEST_FIREBASE,
  RECIEVED_FIREBASE,
  RECIEVED_FIREBASE_ERROR
} from "./types";

var config = {
  apiKey: "AIzaSyCctPILOFiuVRIJATTzUlDYeXWICabeGpg",
  authDomain: "swole-1190b.firebaseapp.com",
  databaseURL: "https://swole-1190b.firebaseio.com"
};

const initializeFirebase = () => {
  return dispatch => {
    dispatch({ type: INITIALIZE });
    firebase.initializeApp(config);

    firebase
      .database()
      .ref("/")
      .once("value")
      .then(snapshot => {
        dispatch({ type: INITIALIZE_SUCCESS, payload: snapshot.val() });
      })
      .catch(error => {
        dispatch({ type: INITIALIZE_ERROR });
      });
  };
};

const fetchFirebase = () => {
  return dispatch => {
    dispatch({ type: REQUEST_FIREBASE });
    firebase
      .database()
      .ref("/")
      .once("value")
      .then(snapshot => {
        dispatch({ type: RECIEVED_FIREBASE, payload: snapshot.val() });
      })
      .catch(error => {
        dispatch({ type: RECIEVED_FIREBASE_ERROR });
      });
  };
};

export { initializeFirebase, fetchFirebase };
