// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

// Business domain imports
import { RestDataSource } from '../data/RestDataSource';

import IUserState from '../data/IUserState.interface';
import UserActionTypes from './UserActionTypes.enum';
import {
  IGetUsersStartAction, IGetUsersSuccessAction, IGetUsersFailureAction,
  ICreateUserStartAction, ICreateUserSuccessAction, ICreateUserFailureAction
} from './IGetUsersActions.interface';
import UserActions from './UserActions.type';

export const getUsersStart = (): IGetUsersStartAction => {
  return {
    type: UserActionTypes.GET_USERS_START,
    isFetching: true,
  }
};

export const getUsersSuccess = (data: any): IGetUsersSuccessAction => {
  return {
    type: UserActionTypes.GET_USERS_SUCCESS,
    users: data._embedded.users,
    isFetching: false,
  }
};

export const getUsersFailure = (): IGetUsersFailureAction => {
  return {
    type: UserActionTypes.GET_USERS_FAILURE,
    isFetching: false,
  }
};

// <Promise<Return Type>, State Interface, Type of Param, Type of Action>
export const getUsers: ActionCreator<
  ThunkAction<Promise<any>, IUserState, null, UserActions>
> = () => {
  return (dispatch: Dispatch) => {
    dispatch(getUsersStart());
    const dataSource: RestDataSource = new RestDataSource();

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
  ThunkAction<Promise<any>, IUserState, null, UserActions>
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




export const createUserStart = (): ICreateUserStartAction => {
  return {
    type: UserActionTypes.CREATE_USER_START,
    isFetching: true,
  }
};

export const createUserSuccess = (data: any): ICreateUserSuccessAction => {
  return {
    type: UserActionTypes.CREATE_USER_SUCCESS,
    users: data._embedded.users,
    isFetching: false,
  }
};

export const createUserFailure = (): ICreateUserFailureAction => {
  return {
    type: UserActionTypes.CREATE_USER_FAILURE,
    isFetching: false,
  }
};

// <Promise<Return Type>, State Interface, Type of Param, Type of Action>
export const createUser: ActionCreator<
    ThunkAction<Promise<any>, IUserState, null, UserActions>
    > = (user: any) => {
  return (dispatch: Dispatch) => {
    dispatch(createUserStart());
    const dataSource: RestDataSource = new RestDataSource();

    return dataSource.createUser(user)
        .then((response) => {
          dispatch(createUserSuccess(response.data.users));
          console.log('create response: ', response)
        })
        .catch((error) => {
          dispatch(createUserFailure());
          console.log('create error: ', error)
        });
  };
};
