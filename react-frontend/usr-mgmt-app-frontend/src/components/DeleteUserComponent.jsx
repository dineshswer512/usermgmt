import axios from 'axios';
import React, { Component } from 'react';
import UserService from '../services/UserService';

class DeleteUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: ''
        }

        this.userIdHandler = this.userIdHandler.bind(this);
    }

    removeUser = (userId) => {
        userId.preventDefault();

        UserService.deleteUser(userId).then(res => {
            this.props.history.push('/users');
        });

    }

    userIdHandler = (event) => {
        this.setState({ userId: event.target.value });
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Remove User Modal</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> User Id: </label>
                                        <input placeholder="userId" name="userId" className="form-control"
                                            value={this.state.userId} onChange={this.userIdHandler} />
                                    </div>

                                    <button className="btn btn-danger" onClick={this.removeUser}>Remove User</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteUserComponent;