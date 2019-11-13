import IUser from './IUser.interface';

export default interface IUserState {
  readonly users: IUser[],
  readonly isFetching: Boolean,
}
