import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data });
        });
    }

    addUser() {
        this.props.history.push('/add-user');
    }

    deleteUser(userId) {
        this.props.history.push('/delete-user');
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Users List</h2>
                <div className="row">
                    <td>
                        <button style={{ marginRight: "15px" }} className="btn btn-primary" onClick={this.addUser}> Add User</button>

                        <button style={{ marginRight: "75px" }} className="btn btn-danger" onClick={this.deleteUser}> Remove User</button>
                    </td>
                </div>
                <div className="row">
                    <table className='table table-stripped table-bordered'>
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Joining Month</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    users =>
                                        <tr key={users.id}>
                                            <td>{users.userId}</td>
                                            <td>{users.name}</td>
                                            <td>{users.email}</td>
                                            <td>{users.address}</td>
                                            <td>{users.joiningDate}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUserComponent;