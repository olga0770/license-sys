import IUser from '../data/IUser.interface';
import UserActionTypes from './UserActionTypes.enum';

export interface IGetUsersStartAction {
  type: UserActionTypes.GET_USERS_START,
  isFetching: true,
}
export interface IGetUsersSuccessAction {
  type: UserActionTypes.GET_USERS_SUCCESS,
  users: IUser[],
  isFetching: false,
}
export interface IGetUsersFailureAction {
  type: UserActionTypes.GET_USERS_FAILURE,
  isFetching: false,
}
