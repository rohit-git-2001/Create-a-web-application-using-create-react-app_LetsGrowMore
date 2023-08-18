import { useState } from "react";
import "./App.css";
// import Container from "./Component/Container";
import Navigation from "./Component/Navigation";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let response = await fetch("https://reqres.in/api/users?page=1");
    const json_response = await response.json();
    setUsers(json_response.data);
  };
  return (
    <>
      <Navigation toggle={getUsers} />
      {/* <Container user={data} /> */}
      <div className="container">
        <h2>Users</h2>
        <div className="cards">
          {users.map((user) => (
            <div key={user.id}>
              <div><img src={user.avatar}/>{" "}
              <label>{user.first_name}</label>
              {" "}
              <label>{user.last_name}</label>
              </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
