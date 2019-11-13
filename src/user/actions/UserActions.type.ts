import {
  IGetUsersStartAction,
  IGetUsersSuccessAction,
  IGetUsersFailureAction
} from './IGetUsersActions.interface';

// Combine the action types with a union (we assume there are more)
type UserActions =
  IGetUsersStartAction
  | IGetUsersSuccessAction
  | IGetUsersFailureAction;

export default UserActions;
