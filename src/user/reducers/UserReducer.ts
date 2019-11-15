// Import Reducer type
import { Reducer } from 'redux';

// Business domain imports
import UserActions from '../actions/UserActions.type';
import UserActionTypes from '../actions/UserActionTypes.enum';
import IUserState from '../data/IUserState.interface';

// Business logic
const initialUserState: IUserState = {
  users: [],
  isFetching: false,
};

const UserReducer: Reducer<IUserState, UserActions> = (
  state = initialUserState,
  action) => {
  switch (action.type) {


    case UserActionTypes.GET_USERS_START: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case UserActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.users,
        isFetching: action.isFetching,
      };
    }
    case UserActionTypes.GET_USERS_FAILURE: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }


    case UserActionTypes.CREATE_USER_START: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case UserActionTypes.CREATE_USER_SUCCESS: {
      return {
        ...state,
        users: action.users,
        isFetching: action.isFetching,
      };
    }
    case UserActionTypes.CREATE_USER_FAILURE: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }



    default:
      return state;
  }
};

export default UserReducer;
