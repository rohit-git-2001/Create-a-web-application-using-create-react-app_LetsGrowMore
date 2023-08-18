import { useState } from "react";
import "./App.css";
import Box from "./Component/Box";
import Container from "./Component/Container";
import Navigation from "./Component/Navigation";

function App() {
  const [users, setUsers] = useState([]);
  const [nextSlate, setNextSlate] = useState(false);

  const getUsers = async () => {
    setNextSlate(true);
    let response = await fetch("https://reqres.in/api/users?page=1");
    const json_response = await response.json();
    setUsers(json_response.data);
  };
  return (
    <>
      <Navigation toggle={getUsers} />
      {nextSlate ? <Container user={users} /> : <Box />}
    </>
  );
}

export default App;
