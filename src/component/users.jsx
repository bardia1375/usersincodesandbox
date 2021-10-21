import React from "react";
import axios from "axios";
class Users extends React.Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const response = await axios.get("https://reqres.in/api/users");
    this.setState({ users: response.data.data });
  }
  render() {
    return (
      <>
        <button onClick={this.handleCreate} className="btn btn-lg btn-primary">
          Create
        </button>
        <div className="row">
          {this.state.users.map((user, index) => {
            return (
              <div className="col-4 text-center p-5" key={index}>
                <img
                  src={user.avatar}
                  alt=""
                  style={{ borderRadius: "50%", width: "100px" }}
                />
                <h4>
                  {user.first_name}
                  {user.last_name}
                </h4>
                <h5>{user.email}</h5>
                <div className="row">
                  <div className="col-6">
                    <button
                      onClick={this.handleUpdata}
                      className="btn btn-info btn-sm "
                    >
                      Update
                    </button>
                    <button
                      onClick={this.handleDelete}
                      className="btn btn-danger btn-sm "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  handleCreate = () => {};
  handleUpdata = (user) => {};
  handleDelete = (user) => {};
}
export default Users;
