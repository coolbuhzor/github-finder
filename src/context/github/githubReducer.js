import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USER,
  GET_USER,
  GET_REPOS,
  LOAD_USERS,
  CLEAR_USERS,
} from '../types';

const red = (state, action) => {
  switch (action.type) {
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default red;
