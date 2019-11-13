import * as React from 'react';
import IUser from './data/IUser.interface';

// Create interface for Props
interface IProps {
  user: IUser;
}

const UserListItem: React.SFC<IProps> = props => {
  const { user } = props;

  return (
    <li key={user.name} className="list-group-item">
      {user.name}
    </li>
  );
};

export default UserListItem;
