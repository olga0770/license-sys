import * as React from 'react';

// Business domain imports
import IUser from './data/IUser.interface';
import {Table, TableHead, TableRow, TableCell, TableBody, Paper} from "@material-ui/core";
import { Link } from "react-router-dom";

interface IProps {
  users: IUser[];
}

const UserList: React.SFC<IProps> = props => {
  const { users } = props;

  return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user, index) => {
              return (
                  <TableRow key={index}>
                    <TableCell>
                        <Link to={`users/${user.username}`}>{user.username}</Link>
                      {/*<UserListItem key={user.username} user={user} />*/}
                    </TableCell>
                  </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
  );
};

export default UserList;
