import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Business domain imports
import UserContainer from '../user/UserContainer';
import UserListItem from "../user/UserListItem";

const App: React.SFC<{}> = () => {
  return (
    <React.Fragment>

        <Router>
            <Switch>
                <Route exact path="/users" component={UserContainer}/>
                <Route exact path="/users/:username" component={UserListItem}/>
            </Switch>
        </Router>

      {/*<UserContainer />*/}
    </React.Fragment>
  );
};

export default App;
