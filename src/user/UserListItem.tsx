// import * as React from 'react';
// import IUser from './data/IUser.interface';
// import { RouteComponentProps } from "react-router-dom";
//
// interface IUserItemProps extends RouteComponentProps<{ username: string }>{}
//
// interface IUserItemState {
//   user: IUser;
// }
//
//
// export default class UserListItem extends React.Component<IUserItemProps, {username: string}> {
//
//   constructor(props: IUserItemProps) {
//     super(props);
//     this.state = {
//       username: this.props.match.params.username
//     }
//   }
//
//   render() {
//     return (<React.Fragment>
//           {this.state.username}
//         </React.Fragment>
//     )
//   }
// }



import * as React from 'react';
import IUser from './data/IUser.interface';
import { RouteComponentProps } from "react-router-dom";


interface IProps {
  user: IUser;
}

interface IRouterProps extends RouteComponentProps<{ username: string }>{}

const UserListItem: React.SFC<IRouterProps> = ({match}) => {
  console.log(match);

  React.useEffect(() => {
    fetch(`http://localhost:8080/users/${match.params.username}`)
  }, [match.params.username]);

  return (
      <React.Fragment key={match.params.username}>
        {match.params.username}
      </React.Fragment>
  );
};

export default UserListItem;

