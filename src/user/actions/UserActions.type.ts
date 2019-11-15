import {
  IGetUsersStartAction, IGetUsersSuccessAction, IGetUsersFailureAction,
  ICreateUserStartAction, ICreateUserSuccessAction, ICreateUserFailureAction
} from './IGetUsersActions.interface';

// Combine the action types with a union (we assume there are more)
type UserActions =
  IGetUsersStartAction
    | IGetUsersSuccessAction
    | IGetUsersFailureAction

    | ICreateUserStartAction
    | ICreateUserSuccessAction
    | ICreateUserFailureAction;

export default UserActions;
