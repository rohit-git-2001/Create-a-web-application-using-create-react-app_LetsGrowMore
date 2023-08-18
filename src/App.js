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
        <div className="cards-grid">
          {users.map((user) => (
            <div key={user.id} className="cards">
              <div><img src={user.avatar}/>
              <p>Name : {user.first_name} {user.last_name}</p>  
              <p>E mail : {user.email}</p>
              </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
