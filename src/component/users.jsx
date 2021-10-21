import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingUsers from "./loading/loadingUser";
const Users = () => {
  const [state, setState] = useState({ users: [] });
  const [loading, setLoading] = useState({ users: [], isLoading: false });

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await axios.get("https://reqres.in/api/users");
      // setState({ users: response.data.data });
      setTimeout(() => {
        setState({ users: response.data.data });
      }, 3000);
    }
    fetchMyAPI();
  }, []);

  const handleCreate = () => {};
  const handleUpdata = (user) => {};
  const handleDelete = (user) => {};

  return (
    <>
      <button onClick={handleCreate} className="btn btn-lg btn-primary">
        Create
      </button>
      <div className="row">
        {loading.isLoading ? (
          <LoadingUsers />
        ) : (
          state.users.map((user, index) => {
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
                      onClick={handleUpdata}
                      className="btn btn-info btn-sm "
                    >
                      Update
                    </button>
                    <button
                      onClick={handleDelete}
                      className="btn btn-danger btn-sm "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
export default Users;
