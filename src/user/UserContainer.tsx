import * as React from 'react';
import { connect } from 'react-redux';

import IAppState from '../store/IAppState.interface';
import IUser from './data/IUser.interface';
import {
  getUsers,
  searchUsers
} from './actions/UserActionCreators';
import UserList from './UserList';
import { UserSearch } from './UserSearch';
import NavigationBar from './NavigationBar';
import Loader from './Loader';
import {Container, CssBaseline} from "@material-ui/core";


// Define available props
// TODO: use correct typing for getCharacters
interface IProps {
  getUsers: any,
  searchUsers: any,
  users: IUser[],
  isFetching: Boolean
}

// Define container with available props
export class UserContainer extends React.Component<IProps> {
  public componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers();
    }
  }

  public render() {
    const {
      users,
      searchUsers,
      isFetching
    } = this.props;

    return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">

            <NavigationBar>
              <UserSearch searchUsers={searchUsers} />
            </NavigationBar>

            { isFetching ? (
                <Loader></Loader>
            ) : (
                <UserList users={users} />
            )}

          </Container>
        </React.Fragment>
    );
  }
}

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    users: store.userState.users,
    isFetching: store.userState.isFetching,
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    getUsers: () => dispatch(getUsers()),
    searchUsers: (term: String) => dispatch(searchUsers(term)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
