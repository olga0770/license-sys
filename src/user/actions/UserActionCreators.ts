// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

// Business domain imports
import { RestDataSource } from '../data/RestDataSource';

import IUserState from '../data/IUserState.interface';
import UserActionTypes from './UserActionTypes.enum';
import {
  IGetUsersStartAction,
  IGetUsersSuccessAction,
  IGetUsersFailureAction
} from './IGetUsersActions.interface';
import UserActions from './UserActions.type';

export const getUsersStart = (): IGetUsersStartAction => {
  return {
    type: UserActionTypes.GET_USERS_START,
    isFetching: true,
  };
}

export const getUsersSuccess = (data: any): IGetUsersSuccessAction => {
  return {
    type: UserActionTypes.GET_USERS_SUCCESS,
    users: data.results,
    isFetching: false,
  };
}

export const getUsersFailure = (): IGetUsersFailureAction => {
  return {
    type: UserActionTypes.GET_USERS_FAILURE,
    isFetching: false,
  };
}

// <Promise<Return Type>, State Interface, Type of Param, Type of Action>
export const getUsers: ActionCreator<
  ThunkAction<
    Promise<any>,
    IUserState,
    null,
    UserActions
  >
> = () => {
  return (dispatch: Dispatch) => {
    dispatch(getUsersStart());
    const dataSource: RestDataSource = new RestDataSource();

    // mock test getUsers() <-> getUserMock()
    return dataSource.getUsers()
      .then((response) => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUsersFailure());
      });
  };
};


// <Promise<Return Type>, State Interface, Type of Param, Type of Action>
export const searchUsers: ActionCreator<
  ThunkAction<
    Promise<any>,
    IUserState,
    null,
    UserActions
  >
> = (term: String) => {
  return (dispatch: Dispatch) => {
    dispatch(getUsersStart());
    const dataSource: RestDataSource = new RestDataSource();

    return dataSource.searchUsers(term)
      .then((response) => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUsersFailure());
      });
  };
};
