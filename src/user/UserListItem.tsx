import * as React from 'react';
import IUser from './data/IUser.interface';

// Create interface for Props
interface IProps {
  user: IUser;
}

const UserListItem: React.SFC<IProps> = props => {
  const { user } = props;

  return (
    <li key={user.username} className="list-group-item">
      {user.username}
    </li>
  );
};

export default UserListItem;
