import * as React from 'react';
import {TextField, InputAdornment} from "@material-ui/core";
import {Search} from "@material-ui/icons";

// Create interface for Props
interface IProps {
  searchUsers: any,
}

export class UserSearch extends React.Component<IProps, { value: string }> {

  componentWillMount() {
    this.setState({ value: '' });
    this._onChangeHandler = this._onChangeHandler.bind(this);
    this._onSubmitHandler = this._onSubmitHandler.bind(this);
  }

  _onChangeHandler(event: React.ChangeEvent) {
    const input = (event.target as HTMLInputElement).value;
    this.setState({ value: input });
  }

  _onSubmitHandler = (event: React.FormEvent) => {
    const { searchUsers } = this.props;
    event.preventDefault();
    searchUsers(this.state.value);
  };

  render() {
    
    return (
      <form
        className="form-inline"
        onSubmit={this._onSubmitHandler}>

        <TextField
            id="standard-basic"
            label="Search"
            margin="normal"
            type="search"
            placeholder="Search User"
            aria-label="Search"
            value={this.state.value}
            onChange={this._onChangeHandler}
            InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                    <Search color="action"/>
                  </InputAdornment>
              ),
            }}

        />
      </form>
    );
  }
};
