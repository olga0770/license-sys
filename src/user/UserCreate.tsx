import * as React from 'react';
import {TextField} from "@material-ui/core";
import IUser from "./data/IUser.interface";

interface IProps {
    createUser: any
}

export class UserCreate extends React.Component<IProps, {value: IUser}> {

    componentWillMount() {
        this.setState({value: {username: ''}});
        this._onChangeHandler = this._onChangeHandler.bind(this);
        this._onSubmitHandler = this._onSubmitHandler.bind(this);
    }

    _onChangeHandler(event: React.ChangeEvent) {
        const input = (event.target as HTMLInputElement).value;
        this.setState({ value: {username: input} });
    }

    _onSubmitHandler = (event: React.FormEvent) => {
        const { createUser } = this.props;
        event.preventDefault();
        createUser(this.state);
    };

    render() {

        return (
            <form
                className="form-inline"
                onSubmit={this._onSubmitHandler}>

                <TextField
                    id="standard-basic"
                    label="Username"
                    margin="normal"
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                    value={this.state.value.username}
                    onChange={this._onChangeHandler}
                />
            </form>
        );
    }
};
