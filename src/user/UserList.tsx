import * as React from 'react';

// Business domain imports
import IUser from './data/IUser.interface';
import UserListItem from "./UserListItem";

// Create interface for Props
interface IProps {
  users: IUser[];
}

const UserList: React.SFC<IProps> = props => {
  const { users } = props;

  return (
    <ul className="list-group">
      {users && users.map(user => {
        return (
            <UserListItem key={user.username} user={user} />
        );
      })}
    </ul>
  );
};

export default UserList;
