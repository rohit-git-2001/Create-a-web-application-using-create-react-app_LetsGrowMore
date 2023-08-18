import { useState } from "react";
import "./App.css";
import Container from "./Component/Container";
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
      <Container user={users} />
    </>
  );
}

export default App;
