import {
  INITIALIZE,
  INITIALIZE_SUCCESS,
  INITIALIZE_ERROR,
  REQUEST_FIREBASE,
  RECIEVED_FIREBASE,
  RECIEVED_FIREBASE_ERROR,
  CLEAR_FIREBASE
} from "../actions/types";

const initialState = { isFetching: false };

export default function articles(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case INITIALIZE_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        db: action.payload
      });
    }
    case INITIALIZE_ERROR: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case REQUEST_FIREBASE: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case RECIEVED_FIREBASE: {
      return Object.assign({}, state, {
        isFetching: false,
        db: action.payload
      });
    }
    case RECIEVED_FIREBASE_ERROR: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case CLEAR_FIREBASE: {
      return Object.assign({}, state, {
        isFetching: false,
        db: null
      });
    }
    default:
      return state;
  }
}
